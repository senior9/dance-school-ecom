import React from 'react';
import useOrder from '../../Hooks/useOrder';
import { TiDeleteOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';

const MyCart = () => {
  const [cart,refetch] = useOrder();
  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    if (!isNaN(itemPrice)) {
      return total + itemPrice;
    } else {
      return total;
    }
  }, 0);

  //   delete method
  const handleDelete = (row) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dance-school-server-phi.vercel.app/carts/${row._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
                refetch()
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="w-full container mx-auto">
      <div className="flex justify-between mb-4">
        <button className="btn btn-info">Total Order : {cart.length}</button>

        <button className="btn btn-success">Total Price: ${totalPrice}</button>
        <button className="btn btn-success">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table bg-lime-200">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Email</th>
              <th>price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={row.class_image} alt="class" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>{row.class_name}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">{row.instructor_name}</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">{row.instructor_email}</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">${row.price}</button>
                </th>
                <th>
                  <button onClick={() => handleDelete(row)} className="btn btn-ghost btn-xs text-2xl">
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

export default MyCart;
