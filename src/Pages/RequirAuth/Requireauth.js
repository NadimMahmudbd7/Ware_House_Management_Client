import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Requireauth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if(loading){
    return <Loading></Loading>
  }
  if (!user) {
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(!user?.emailVerified){
    return <div className='text-center fw-bold' style={{fontSize:"40px", marginTop:"20px"}}>Please Verify Your Mail</div>
}
    return children
};

export default Requireauth;