import React, { useContext, useState } from "react";
import signupBg from "../../assets/auth/signupBg.jpg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authProvider } from "../../Provider/Provider";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const { createUserInfo, updateProfileUser, googleSignInMethod } =
    useContext(authProvider);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email, data.photoURL, data.displayName);
    createUserInfo(data.email, data.password)
    .then((res) => {
      const loggedUser = res.user;
      console.log(loggedUser);
      reset();
      const user = {
        name: data.displayName,
        email: data.email,
        image: data.photoURL,
      };
      return updateProfileUser(user.name, user.image)
        .then(() => user);
    })
    .then((user) => {
      console.log(user);
      const loggedUser = {
        name: user.name,
        email: user.email,
        image: user.image,
      };
      console.log(loggedUser);
      return fetch("https://dance-school-server-senior9.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(loggedUser),
      });
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.insertedId) {
        reset();
        Swal.fire(
          "Success!",
          "Your account has been registered.",
          "success"
        );
      }
    })
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  const googleSignIn = () => {
    googleSignInMethod()
      .then((result) => {
        const googleLoggedUser = result.user;
        const loggedUser = {
          name: googleLoggedUser.displayName,
          email: googleLoggedUser.email,
          image: googleLoggedUser.photoURL,
        };
        console.log(loggedUser);
        fetch("https://dance-school-server-phi.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire(
                "Success!",
                "Your account has been registered.",
                "success"
              );
            }
          })
          .catch((error) => {
            setError(error.message);
          });

        navigate(from, { replace: true });
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
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${signupBg})` }}
    >
      <div className="flex-col lg:flex-row-reverse">
        <div className="card bg-slate-500">
          <h1 className="text-yellow-400 text-3xl text-center mt-10 font-bold">
            Please Register First
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-2xl text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                name="displayName"
                {...register("displayName", { required: true })}
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
                placeholder="Enter an email"
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
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Drop your photo link"
                name="photoURL"
                {...register("photoURL")}
                className="input input-bordered w-96"
              />
            </div>
            <div className="form-control">
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
                  className="input input-bordered w-96"
                />
                <div>
                  <span
                    className="input-group-text absolute right-16 bottom-5 transform -translate-y-1/2 cursor-pointer"
                    onClick={passwordVisibility}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <div className="w-96">
                  {errors.password?.type === "required" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      Password required
                    </p>
                  )}
                </div>
                <div className="w-96">
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      Password must have at least 6 characters
                    </p>
                  )}
                </div>
                <div className="w-96">
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      Password can have a maximum of 12 characters
                    </p>
                  )}
                </div>
                <div className="w-96">
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                      Password must contain at least one uppercase letter, one
                      lowercase letter, one number, and one special character
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="form-control">
              <button className="btn btn-primary w-96" type="submit">
                Register
              </button>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="btn btn-outline w-96 mt-5"
                onClick={googleSignIn}
              >
                Register with Google
              </button>
            </div>
            {error && (
              <div className="w-96">
                <p className="text-red-100 text-center bg-red-500 text-lg font-normal">
                  {error}
                </p>
              </div>
            )}
            <div className="flex justify-center items-center text-center text-white mt-5">
              <span className="mr-2">Already have an account?</span>
              <Link to="/login" className="text-yellow-400">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
