import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../../shared/Loader';
import './productsdisplay.css';

export default function Products() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      const params = new URLSearchParams();
      params.append('page', current);

      const response = await axios.get(`${import.meta.env.VITE_URL_LINK}/products?${params.toString()}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrent(pageNumber + 1);
    setSelectedProduct(null); // Clear selected product when changing pages
  };

  const handleProductClick = (productId) => {
    const clickedProduct = data.products.find((product) => product._id === productId);
    setSelectedProduct(clickedProduct);
  };

  useEffect(() => {
    fetchData();
  }, [current]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className='display-product row text-center'>
        {data && data.products && data.products.length ? (
          data.products.map((product) => (
            <div className='info-product col-md-3' key={product._id} onClick={() => handleProductClick(product._id)}>
              <div className='images'>
                <img src={product.mainImage.secure_url} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <a href="#">Details</a>
              {selectedProduct && selectedProduct._id === product._id && (
                <div>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  {/* Add other product details as needed */}
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
          {Array.from({ length: Math.ceil(data?.total / data?.page) || 0 }).map((_, index) => (
            <li key={index} className={`page-item ${current === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(index)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
