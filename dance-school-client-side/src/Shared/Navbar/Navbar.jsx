import React from "react";
import "./Navbar.css";
import navImg from  "../../assets/navbar-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="custom-color">
    <div className="container mx-auto ">
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>

              <li>
                <Link>Instructors</Link>
              </li>
              <li>
                <Link>Classes</Link>
              </li>
              <li>
                <Link>Dashboard </Link>
              </li>
            </ul>
          </div>
          <Link className=" normal-case text-xl"><img className="w-full h-1/2" src={navImg} alt="" /></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
          <li >
                <Link>Home</Link>
              </li>

              <li>
                <Link>Instructors</Link>
              </li>
              <li>
                <Link>Classes</Link>
              </li>
              <li>
                <Link>Dashboard </Link>
              </li>
          </ul>
        </div>
       
      </div>
    </div>
    <p className="divider bg-white p-0 m-0"></p>
    </div>
  );
};

export default Navbar;
