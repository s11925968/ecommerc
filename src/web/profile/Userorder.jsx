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
    <div className='table-responsive'>
  <table className='table table-bordered table-striped'>
    <thead>
      <tr>
        <th>Address</th>
        <th>Phone</th>
        <th>Coupon Name</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      {data.length ? (
        data.map((order) => (
          <tr key={order._id}>
            <td>{order.address}</td>
            <td>{order.phoneNumber}</td>
            <td>{order.couponName}</td>
            <td>{order.finalPrice}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No data available</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  );
}
