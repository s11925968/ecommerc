import React, { useContext } from 'react'
import Loader from '../../shared/Loader';
import { userContext } from '../context/User';

export default function Userinfo() {
  const { userData ,lodaing} = useContext(userContext);
  if(lodaing){
    return <Loader />;
  }
  return (
    <div>
      <h2>{userData.userName}</h2>
      <img src={userData.image.secure_url} />
    </div>
  );
}
