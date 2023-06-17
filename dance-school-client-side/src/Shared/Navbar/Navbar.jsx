import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authProvider } from "../../Provider/Provider";
import { FaShoppingCart } from "react-icons/fa";
import useOrder from "../../Hooks/useOrder";
import navImg from "../../assets/navbar-logo.png";

const Navbar = () => {
  const { user, photoUrl, displayName, logOut } = useContext(authProvider);
  console.log(photoUrl);
  const [cart] = useOrder();
  console.log(cart.length);

  // handleSign out
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => console.log(err.message));
  };
  const navigate = useNavigate();

  return (
    <div className=" bg-[#0E2954]  ">
      <div className="navbar  mx-auto  container text-white">
        <div className="navbar-start flex items-center">
          <div className="dropdown inline-block">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Dance Instructors</Link>
              </li>
              <li>
                <Link to="/all-classes">Dance Classes</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <Link className="flex-1 normal-case text-xl" to="/">
            <img className="h-1/2" src={navImg} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg text-warning">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Dance Instructors</Link>
            </li>
            <li>
              <Link to="/all-classes">Dance Classes</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <button className="btn gap-1 flex items-center">
                      <FaShoppingCart />
                      <div className="badge badge-outline">+{cart.length}</div>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleSignOut} to="/login">
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            )}
            {user && displayName && (
              <>
                <Link
                  // className="d-flex tooltip tooltip-top items-center"
                  // data-tip={displayName}
                >
                  <div className="avatar online h-[50px]">
                    <img
                      className="w-full  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                      src={photoUrl}
                      alt=""
                    />
                  </div>
                </Link>
                <li>
                <Link to="/login">{displayName}</Link>
              </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
