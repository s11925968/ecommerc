import React from 'react'
import Inputs from '../../shared/Inputs';
import { useFormik } from 'formik';
import {registerReview} from '../../shared/Validate.jsx'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
export default function CreateRivews() {
  const navigte=useNavigate();
const {_id}=useParams();
console.log(_id);
  const initialValues={
    comment:'',
    rating:'',
  }
  const onSubmit=async users=>{

    const token = localStorage.getItem('userToken');
    const { data } = await axios.post(
      `${import.meta.env.VITE_URL_LINK}/products/${_id}/review`,users,
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );    
    if(data.message=="success"){
      toast.success('review success', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigte('/');
    }
  }
  const formik=useFormik({
    initialValues,
    onSubmit,
    validationSchema:registerReview,
  });
  
  const inputs=[
    {
      id:'comment',
      type:'text',
      name:'comment',
      title:'comment',
      value:formik.values.comment
    },
    {
      id:'rating',
      type:'number',
      name:'rating',
      title:'rating',
      value:formik.values.rating,
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
  onChange={input.onChange || formik.handleChange}
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
