import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../../shared/Loader";
import "./productsdisplay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Products() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const params = new URLSearchParams();
      params.append("page", current);

      const response = await axios.get(
        `${import.meta.env.VITE_URL_LINK}/products?${params.toString()}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(data);
  const handlePageClick = (pageNumber) => {
    setCurrent(pageNumber + 1);
    setSelectedProduct(null);
  };

  const handleProductClick = (productId) => {
    setSelectedProduct((prevSelectedProduct) =>
      prevSelectedProduct && prevSelectedProduct._id === productId
        ? null
        : data.products.find((product) => product._id === productId)
    );
  };

  useEffect(() => {
    fetchData();
  }, [current]);
  console.log(data);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="display-product row text-center">
        {data && data.products && data.products.length ? (
          data.products.map((product) => (
            <div
              className="info-product col-md-3"
              key={product._id}
              onClick={() => handleProductClick(product._id)}
            >
              <div className="images">
                <img src={product.mainImage.secure_url} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <h2>
                {" "}
                {Array.from({ length: product.avgRating }).map(
                  (_, starIndex) => (
                    <FontAwesomeIcon
                      key={starIndex}
                      icon={faStar}
                      className=""
                    />
                  )
                )}
              </h2>
              <a href="#">Details</a>
              {selectedProduct && selectedProduct._id === product._id && (
                <div>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  {product.reviews.map((review, index) => (
                    <div key={review._id}>
                      <h1>Comment {index}</h1>
                      <h2>{review.comment}</h2>
                      {Array.from({ length: review.rating }).map(
                        (_, starIndex) => (
                          <FontAwesomeIcon
                            key={starIndex}
                            icon={faStar}
                            className=""
                          />
                        )
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
      <nav aria-label="Page navigation example ">
        <ul className="pagination justify-content-center my-5">
          {Array.from({ length: Math.ceil(data?.total / data?.page) || 0 }).map(
            (_, index) => (
              <li
                key={index}
                className={`page-item ${current === index + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageClick(index)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}
