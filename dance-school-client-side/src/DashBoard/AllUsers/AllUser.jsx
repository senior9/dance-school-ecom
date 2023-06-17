import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import { MdAddModerator } from "react-icons/md";
import { TiDeleteOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';

const AllUser = () => {
const {data:user=[],refetch} =useQuery(['users'],async()=>{
    const response = await fetch('https://dance-school-server-senior9.vercel.app/users')
    return response.json();
})

const handlemakeAdmin = (user) => {
  
    fetch(`https://dance-school-server-senior9.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire(
            'Admin Updated!',
            'The user has been made an admin.',
            'success'
          );
        }
      })
      
};

const handleMakeInstructor =(user)=>{
  fetch(`http://localhost:5000/users/instructor/${user._id}`, {
    method: 'PATCH',
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount) {
        Swal.fire(
          'Instructor Updated!',
          'The user has been made an Instrructor.',
          'success'
        );
      }
    })
    
}


    return (
        <div className="w-full container mx-auto">
      

      <div className="overflow-x-auto">
        <table className="table bg-slate-400 text-white">
          {/* head */}
          <thead>
            <tr className='text-center'>
              <th>No</th>
              <th>Image</th>
              <th>user Name</th>
              <th>Email</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {/* row 1 */}
            {user.map((singleUser, index) => (
              <tr key={singleUser._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleUser.image} alt="class" />
                      </div>
                    </div>
                  </div>
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">{singleUser.name}</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs lowercase">{singleUser.email}</button>
                </th>
                
                <th>
                  {singleUser.role === 'instructor'? 'instructor':<button onClick={() => handleMakeInstructor(singleUser)} className="btn btn-ghost btn-xs text-2xl">
                    <MdAddModerator />
                  </button>}
                  {
                    singleUser.role ==='admin'? 'admin' :<button onClick={() => handlemakeAdmin(singleUser)} className="btn btn-ghost btn-xs text-2xl">
                    <FaUserShield />
                  </button>
                  }
                  <button  className="btn btn-ghost btn-xs text-2xl">
                    <TiDeleteOutline />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllUser;