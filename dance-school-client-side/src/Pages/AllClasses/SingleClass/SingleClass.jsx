import React, { useContext } from 'react';
import { authProvider } from '../../../Provider/Provider';
import Swal from 'sweetalert2';
import { json, useLocation, useNavigate } from 'react-router-dom';
import { replace } from 'formik';
import useOrder from '../../../Hooks/useOrder';

const SingleClass = ({singleClass}) => {
    
    const {available_seats,class_image,class_name,instructor_name,price,students}= singleClass;
    const {user} = useContext(authProvider);
    const navigate= useNavigate();
    const location = useLocation();
    const [,refetch]=useOrder();

    const handleAddCart = (item)=>{
      console.log("Item Added")
      if(user && user.email){
        const orderClassCartItem = {available_seats,class_image,class_name,instructor_email:user.email,instructor_image:user.photoUrl,instructor_name:user.displayName,price,students,}
        fetch(`http://localhost:5000/carts`,{
          method:"POST",
          headers:{
            'content-type':"application/json"
          },
          body:JSON.stringify(orderClassCartItem)
        })
        .then((response)=>response.json())
        .then(data=>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-start',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
          
        })
        
      }
      else{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location }})
          }
        })
      }
    }
    return (
        <div className='container mx-auto '>
            <div className="card lg:card-side bg-base-100   shadow-xl">
  <figure><img src={class_image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{class_name}</h2>
    <p>Instructor: {instructor_name}</p>
    <p>Seat avilable: {available_seats} </p>
    <div className="card-actions justify-between">

      <button className="btn btn-accent btn-outline">Price :{price}</button>
      <button onClick={handleAddCart} className="btn btn-info btn-outline">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleClass;