import React from 'react';

const SingleClass = ({singleClass}) => {
    
    const {available_seats,class_image,class_name,instructor_name,price}= singleClass;
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
      <button className="btn btn-info btn-outline">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleClass;