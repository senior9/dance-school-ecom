import React, { useContext } from 'react';
import { authProvider } from '../Provider/Provider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(authProvider);
    if (loading) {
     return (
         <div className= 'mt-28 items-center flex justify-center'>
           <progress className="progress w-56 "></progress>
         </div>
     );
   }
   if (user) {
     return children;
   }
 
   return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>;
 };
 

export default PrivateRoute;