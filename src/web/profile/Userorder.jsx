import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader';

export default function Userorder() {
  const getorder = async ()=>{
    const token=localStorage.getItem('userToken');
    const {data}=await axios.get(`${import.meta.env.VITE_URL_LINK}/order`,
    {
      headers:{
        Authorization:`Tariq__${token}`
      }
    },
    );
    return data.orders;
  }
  const {data,isLoading}=useQuery('getOrder',getorder);
  if(isLoading){
    return <Loader />;
  }
  return (
    <div className='row'>
      {data.length ? (
        data.map((order) => (
          <div className="col-md-4  " key={order._id}>
            <div className='ms-4 my-4 bg-primary'>
            <h2>Address:{order.address}</h2>
            <h3>Phone:{order.phoneNumber}</h3>
            <h3>{order.couponName}</h3>
            <h3>TotalPrice:{order.finalPrice}</h3>
            </div>
            
          </div>
        ))
      ) : (
        'No data available'
      )}
    </div>
  );
}
