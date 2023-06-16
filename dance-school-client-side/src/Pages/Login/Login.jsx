import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authProvider } from "../../Provider/Provider";
import loginBg from "../../assets/auth/loginBg.jpg";
import "./Login.css";

const Login = () => {
  const { signIn, googleSignInMethod } = useContext(authProvider);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const result = await signIn(data.email, data.password);
      const createUser = result.user;
      console.log(createUser);
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignInMethod();
      navigate(from, { replace: true });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="flex-col lg:flex-row-reverse">
        <div className="card bg-slate-500 pb-5">
          <h1 className="text-yellow-400 text-3xl text-center font-bold mt-10">
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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-white">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={showPassword ? "Hide password" : "Show password"}
                  className="input input-bordered w-96"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                <span
                  className="input-group-text absolute right-4 bottom-5 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text text-2xl text-white">
                  Are You a New User?{" "}
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
              onClick={handleGoogleSignIn}
              className="btn btn-success btn-outline text-white text-xl"
            >
              Google Sign In
            </button>
          </div>
          {error && <span className="text-red-500">{error}</span>}
        </div>
      </div>
    </div>
  );
};

export default Login;
