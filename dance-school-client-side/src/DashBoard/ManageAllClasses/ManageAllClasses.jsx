import React from 'react';
import useClass from '../../Hooks/useClass';
import { TiDelete, TiDeleteOutline } from 'react-icons/ti';
import { FcApproval } from 'react-icons/fc';
import useAxiosSecure from '../../Hooks/useAxiousSecure';
import Swal from 'sweetalert2';

const ManageAllClasses = () => {
    const [classCollection,refetch]=useClass();
    console.log(classCollection);
    const [axiosSecure] = useAxiosSecure();
    const handleDelte=(item)=>{
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
           
              axiosSecure.delete(`/classCollection/${item._id}`)
              .then(res=>{
                if(res.data.deletedCount>0){
                  refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
                refetch();
              })
            }
          })
    }
    return (
        <div className='w-full container mx-auto'>
             This is Admin Manage Classes

             <div className="overflow-x-auto">
        <table className="table bg-slate-400 text-white">
          {/* head */}
          <thead>
            <tr className='text-center'>
              <th>No</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Avilable Seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {/* row 1 */}
            {classCollection.map((singleClass, index) => (
              <tr key={singleClass._id} className='text-center'>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClass.class_image} alt="class" />
                      </div>
                    </div>
                  </div>
                </td>

                <th>
                  <button className="btn btn-ghost btn-xs">{singleClass.class_name}</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">{singleClass.instructor_name}</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs lowercase">{singleClass.instructor_email}</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs lowercase">{singleClass.available_seats}</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs lowercase">$ {singleClass.price}</button>
                </th>
                <th>
                  <div className=" flex gap-5 ml-16">

                  <div>
                  <button  className="btn btn-ghost btn-xs text-2xl">
                    {singleClass.status}
                  </button>
                  </div>
                  <div>
                  <button  onClick={()=>handleDelte(singleClass)} className="btn btn-ghost btn-xs text-2xl">
                    <TiDelete></TiDelete>
                  </button>
                  </div>
                  </div>
                </th>
                
                
                <th>
                  
                  
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default ManageAllClasses;