import React from 'react'
import Inputs from '../../../shared/Inputs.jsx';
import { useFormik } from 'formik';
import {registerOrder} from '../../../shared/Validate.jsx'
import axios from 'axios';
import { toast } from 'react-toastify';
export default function Createorder() {

  const initialValues={
    address:'',
    phone:'',
    couponName:'',
  }
  const onSubmit=async users=>{
    
    const token = localStorage.getItem('userToken');
    const { data } = await axios.post(
      `${import.meta.env.VITE_URL_LINK}/order`,users,
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
    if(data.message=="success"){
      formik.resetForm();
      toast.success('order success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  const formik=useFormik({
    initialValues,
    onSubmit,
    validationSchema:registerOrder,
  });
  const inputs=[
    {
      id:'address',
      type:'text',
      name:'address',
      title:'User address',
      value:formik.values.address
    },
    {
      id:'phone',
      type:'number',
      name:'phone',
      title:'user phone',
      value:formik.values.phone,
    },
    {
      id:'couponName',
      type:'text',
      name:'couponName',
      title:'user couponName',
      value:formik.values.couponName,
    },
  ];
  const renderInput =inputs.map((input,index)=>
  <Inputs 
  type={input.type}
  key={index}
  id={input.id}
  name={input.name}
  title={input.title}
  value={input.value}
  error={formik.errors}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  touched={formik.touched}
  /> 

  )
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div>
      <h2 className='text-center'>create account</h2>
      <form onSubmit={formik.handleSubmit}>
        {renderInput}
        <button type="submit" disabled={!formik.isValid} className='w-100'>
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
