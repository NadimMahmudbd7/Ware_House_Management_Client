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
    return <div>Please at first mail verify</div>
}
    return children
};

export default Requireauth;