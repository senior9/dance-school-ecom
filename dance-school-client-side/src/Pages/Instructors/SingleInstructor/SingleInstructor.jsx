import React from 'react';

const SingleInstructor = ({insructors}) => {
    console.log(insructors)
    const {instructor_name,instructor_image,instructor_email} =insructors;
    return (
        <div >
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full' src={instructor_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {instructor_name}
      <div className="badge badge-success">NEW</div>
    </h2>
    <p>EMAIL : {instructor_email}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-accent badge-outline">Dancer</div> 
      <div className="badge badge-error badge-outline">Instructors</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleInstructor;