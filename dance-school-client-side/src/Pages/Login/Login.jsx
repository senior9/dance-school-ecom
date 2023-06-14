import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import loginBg from "../../assets/auth/loginBg.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authProvider } from "../../Provider/Provider";

const Login = () => {
  const { signIn, googleSignInMethod } = useContext(authProvider);
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    signIn(data.email, data.password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };

  // Google
  const googleSignIn = () => {
    googleSignInMethod()
      .then(() => {
        navigate(from,{replace:true});;
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div
      className="hero min-h-screen "
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className=" flex-col lg:flex-row-reverse ">
        <div className="card bg-slate-500  pb-5">
          <h1 className="text-yellow-400 text-3xl text-center  font-bold mt-10">
            Log in
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
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
                  {...register("password", { pattern: /^[A-Za-z]+$/i })}
                  className="input input-bordered w-96 "
                />

                <span
                  className="input-group-text absolute right-4 bottom-5 transform -translate-y-1/2 cursor-pointer"
                  onClick={passwordVisibility}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text text-2xl text-white">
                  Are You New User?{" "}
                  <Link className="text-orange-200" to="/register">
                    Please Register!
                  </Link>{" "}
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-white text-xl">
                Login
              </button>
            </div>
          </form>
          <div className="form-control mt-6">
            <button
              onClick={googleSignIn}
              className="btn btn-success btn-outline text-white text-xl"
            >
              Google Sign In{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
