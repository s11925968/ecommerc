import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../../shared/Loader';
import { CartConterxt } from '../../context/Cart';
import { toast } from 'react-toastify';
import './Category.css'
export default function Category() {
  const {_id}=useParams();
  const navaigate=useNavigate();
  const {addToCartContext}=useContext(CartConterxt);

  const getProduct=async()=>{
    const {data}=await axios.get(`${import.meta.env.VITE_URL_LINK}/products/category/${_id}`);
    return data.products;
  }

  const addToCart=async(productId)=>{
    const res=await addToCartContext(productId);
    if(res.message=="success"){
      toast.success('add success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navaigate("/cart")
    }
  }
  const {data,isLoading}=useQuery('get_product',getProduct);
  if(isLoading){
    return <Loader />;
  }
  return (
    <div className='container'>
      <div className='Category row'>
      {
        
        data.length?data.map((product)=>
        <div className='Category-subimages col-md-4' key={product._id}>
          <img src={product.mainImage.secure_url}className='img-fluid'></img>
          <h2>{product.name}</h2>
          <button
              className="btn btn-outline-info"
              onClick={() => addToCart(product._id)}
            >
              Add to cart
            </button>
            <br/>
          <Link to={`/product/${product._id}`}>details</Link>
        </div>
        ):"no data available"
      }
      </div>
      
    </div>
  )
}
