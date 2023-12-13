import React, { useContext } from 'react';
import { userContext } from '../context/User';
import style from './Profile.module.css'
import Loader from '../../shared/Loader';
import { Link, Outlet } from 'react-router-dom';

export default function Profile() {
  
  const { userData ,lodaing} = useContext(userContext);
  console.log(userData);
  if(lodaing){
    return <Loader />;
  }
  return (
    <aside className={`${style.profile}`}>
      <div className={`${style.profileLinks}`}>
        <nav>
          <Link to="">info</Link>
          <Link to="contact">contact</Link>
          <Link to="Userorder">getorder</Link>
        </nav>
      </div>
      <div className={`${style.userData}`}>
        <Outlet />
      </div>
    </aside>
  );
}
