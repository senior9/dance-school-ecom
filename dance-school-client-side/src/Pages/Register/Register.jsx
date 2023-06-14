import React, { useContext, useState } from "react";
import signupBg from "../../assets/auth/signupBg.jpg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Provider, { authProvider } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { Result } from "postcss";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error,setError ]=useState();
    const {createUserInfo,updateProfileUser,googleSignInMethod} =useContext(authProvider);
    const navigate = useNavigate();
    let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.name,data.photo);
    //   create user by authContext 
    createUserInfo(data.email, data.password)
    .then(res=>{
        const loggedUser = res.user;
        console.log(loggedUser);
        reset();
    })

    updateProfileUser(data.name, data.photo)

         
          .then(() => {
            const loggedUser = {name:data.name,email:data.email,image:data.photo}
            fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(loggedUser)
            })
            .then(response=>response.json())
            .then(data =>{
              if(data.insertedId){
                reset()
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })
            
            // console.log(data.displayName, data.photoURL);
            navigate("/");
          })
          .catch((error) => {
            setError(error.message);
          });
  };
// Sign In 
// Google
const googleSignIn = () => {
  googleSignInMethod()
    .then((result) => {
      const googleLoggedUser = result.user;
      const loggedUser = {name:googleLoggedUser.displayName,email:googleLoggedUser.email,image:googleLoggedUser.photoURL};
            fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(loggedUser)
            })
            .then(response=>response.json())
            .then(data =>{
              if(data.insertedId){
                reset()
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
            })

      navigate(from,{replace:true});
    })
    .catch((error) => {
      setError(error.message);
    });
};
 
  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };




  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${signupBg})` }}
    >
      <div className=" flex-col lg:flex-row-reverse ">
        <div className="card bg-slate-500 ">
          <h1 className="text-yellow-400 text-3xl text-center mt-10 font-bold">
            Please Register First{" "}
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered w-96"
              />
              <div className="w-96">
                {errors.name && (
                  <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                    Name required
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter a email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered w-96"
              />
              <div className="w-96">
                {errors.email && (
                  <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                    Email required
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-white">
                  Photo Url
                </span>
              </label>
              <input
                type="text"
                placeholder="Drop your photo link"
                name="photo"
                {...register("photo")}
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-2xl text-white">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={showPassword ? "Hide password" : "Show password"}
                  name="password"
                  {...register("password", {
                    required: true,
                    maxLength: 12,
                    minLength: 6,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                  className="input input-bordered w-96 "
                />
                <div>
                  <span
                    className="input-group-text absolute  right-16 bottom-5 transform -translate-y-1/2 cursor-pointer"
                    onClick={passwordVisibility}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div className="w-96">
                  {errors.password?.type === "required" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      password required
                    </p>
                  )}
                </div>
                <div className="w-96">
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      password at least 6 charaters
                    </p>
                  )}
                </div>
                <div className="w-96">
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      password maximum 12 charaters
                    </p>
                  )}
                </div>
                <div className="w-96">
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      one Uppercase ,one lowercase , one special charaters , one
                      numbers
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text text-2xl text-white">
                  Already have an account?{" "}
                  <NavLink className="text-yellow-200" to="/login">
                    Please Log in!
                  </NavLink>{" "}
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-white text-xl">
                Sign up
              </button>
            </div>
            
          </form>
          <div className="form-control mt-6">
              <button onClick={googleSignIn} className="btn btn-warning btn-outline text-white text-xl">
                Google Sign In  </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
