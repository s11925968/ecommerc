import { useEffect, useState } from "react";
import  { createContext } from "react";
import axios from "axios";
export const CartConterxt=createContext(null);

export function CartConterxtProvider({children}){
  let [loader,setLoader]=useState(true);
  const  addToCartContext=async (productId)=>{
      const token=localStorage.getItem('userToken');
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL_LINK}/cart`,
        {productId,quantity:1}
        ,
        {
          headers: {
            Authorization:
              `Tariq__${token}`, 
          },
        });
        return data;
  }
  const getCartContext=async()=>{
      setLoader(true);
      const token=localStorage.getItem('userToken');
      const {data}=await axios.get(`${import.meta.env.VITE_URL_LINK}/cart`,
      {
        headers:{
          Authorization:`Tariq__${token}`,
        }
      });
      setLoader(false)
      return data;
      
  }
  const removeCartContext=async (productId)=>{
    setLoader(true);

      const token=localStorage.getItem('userToken');
      const {data}=await axios.patch(`${import.meta.env.VITE_URL_LINK}/cart/removeItem`,
      {
        productId
      },
      {
        headers:{
          Authorization:`Tariq__${token}`,
        }
      });
      setLoader(false)
      return data;
  }
  const clearCartContext = async () => {
    setLoader(true);

    const token = localStorage.getItem('userToken');
    const { data } = await axios.patch(
      `${import.meta.env.VITE_URL_LINK}/cart/clear`,
      {},
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
    return data;
  };
  const decreaseCartContext = async (productId) => {
    setLoader(true);

    const token = localStorage.getItem('userToken');
    const { data } = await axios.patch(
      `${import.meta.env.VITE_URL_LINK}/cart/decraseQuantity`,
      {productId},
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
    setLoader(false)
    return data;
  };
  const increaseCartContext = async (productId) => {
    setLoader(true);

    const token = localStorage.getItem('userToken');
    const { data } = await axios.patch(
      `${import.meta.env.VITE_URL_LINK}/cart/incraseQuantity`,
      {productId},
      {
        headers: {
          Authorization: `Tariq__${token}`,
        },
      }
    );
    setLoader(false)
    return data;
  };
  return <CartConterxt.Provider value={{addToCartContext,getCartContext,removeCartContext,clearCartContext,decreaseCartContext,increaseCartContext,loader}}  >
    {children}
  </CartConterxt.Provider> ;
}  