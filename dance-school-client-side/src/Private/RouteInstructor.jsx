import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../Hooks/useInstructor';
import { authProvider } from '../Provider/Provider';

const RouteInstructor = ({children}) => {
    const {loading,user} = useContext(authProvider);
    const [isInstructor,isInstructorLoading]=useInstructor();
    const location =useLocation();
    if (loading || isInstructorLoading) {
     return (
         <div className= 'mt-28 items-center flex justify-center'>
           <progress className="progress w-56 "></progress>
         </div>
     );
   }
   if (user && isInstructor) {
     return children;
   }
 
   return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>;
 };


export default RouteInstructor;