import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { authProvider } from "../../Provider/Provider";
import useAxiosSecure from "../../Hooks/useAxiousSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(authProvider);
  const { register, handleSubmit,reset } = useForm();
  const [axiosSecure ] =useAxiosSecure();

  const onSubmit = (data) => {
    console.log(data);
    const {available_seat,class_image,class_name,instructor_email,instructor_name,price,students} =data;
    const  newData = {class_image,class_name,instructor_email,instructor_name,available_seat:parseFloat(available_seat),price:parseFloat(price),students:parseFloat(students),status: "pending"};
    axiosSecure.post(`/classCollection`,newData)
    .then(data=>{
        console.log(data)
        if (data.data.insertedId) {
            reset();
            Swal.fire("Success!", " Class Add Successfully .", "success");
          }
        
    })


  };

  return (
    <div>
      <h1 className="text-center text-emerald-700 text-5xl font-semibold">
        Add Class By Instructor
      </h1>
      <form className="shadow-2xl bg-base-100 mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-10 p-10 w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-96"
              readOnly
              defaultValue={user.email}
              {...register("instructor_email", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-96"
              
              defaultValue={user?.displayName}
              {...register("instructor_name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class name</span>
            </label>
            <input
              type="text"
              placeholder="Class name"
              className="input input-bordered w-96"
              {...register("class_name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="text"
              placeholder="Image Link"
              className="input input-bordered w-96"
              {...register("class_image", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seat</span>
            </label>
            <input
              type="number"
              placeholder="Available seat"
              className="input input-bordered w-96"
              {...register("available_seat", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-96"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number Of Students</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-96"
              // defaultValue={0}
              // readOnly
              {...register("students", { required: true })}
            />
          </div>
        </div>
        <div className="flex items-center justify-center pb-5">
          <button className="btn btn-secondary text-center" type="submit">
            Add a Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
