import React, { useContext } from 'react'
import Loader from '../../shared/Loader';
import { userContext } from '../context/User';

export default function Usercotact() {
  const { userData ,lodaing} = useContext(userContext);
  if(lodaing){
    return <Loader />;
  }
  return (
    <div>
      <div className="user-content">
        <h2>{userData.email}</h2>
      </div>
    </div>
  );
}
