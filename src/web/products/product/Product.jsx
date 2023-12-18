import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../../shared/Loader';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

export default function Product() {
  const { _id } = useParams();

  const getProduct = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_URL_LINK}/products/${_id}`);
    return data.product;
  };

  const { data, isLoading } = useQuery('product', getProduct);

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container Products">
      <div className="row">
        <div className="col-lg-6">
          <img src={data.mainImage.secure_url} className="img-fluid" alt={data.name} />
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>Price: ${data.price}</p>
        </div>
        <div className="col-lg-6">
          {data.subImages.map((sub, index) => (
            <div key={sub._id} className='Products-subimg text-center'>
              <img src={sub.secure_url} className="img-fluid" alt={data.name} />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Reviews</h1>
          {data.reviews.map((review, index) => (
            <div key={review._id} className='col'>
              <h2>Comment</h2>
              <p>{review.comment}</p>
              {Array.from({ length: review.rating }).map(
                        (_, starIndex) => (
                          <FontAwesomeIcon key={starIndex} icon={faStar} className='' />
                        )
                      )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
