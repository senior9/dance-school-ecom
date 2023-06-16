import React, { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';
import { authProvider } from '../Provider/Provider';

const AdminRoute = ({children}) => {
    const {loading,user} = useContext(authProvider);
    const [isAdmin,isAdminLoading]= useAdmin();
    const location =useLocation();
    if (loading || isAdminLoading) {
     return (
         <div className= 'mt-28 items-center flex justify-center'>
           <progress className="progress w-56 "></progress>
         </div>
     );
   }
   if (user && isAdmin) {
     return children;
   }
 
   return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>;
 };


export default AdminRoute;