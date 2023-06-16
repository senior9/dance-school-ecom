import React from "react";
import {
  FaBorderAll,
  FaEdit,
  FaHome,
  FaShoppingCart,
  FaUserEdit,
  FaUtensilSpoon,
  FaWallet,
} from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";
import useOrder from "../Hooks/useOrder";
import useAdmin from "../Hooks/useAdmin";
import { FcHome } from "react-icons/fc";
import { BsCheckAll } from "react-icons/bs";
import { MdBorderColor } from "react-icons/md";
import useInstructor from "../Hooks/useInstructor";

const DashBoard = () => {
  // const [cart] = useOrder();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] =useInstructor()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-teal-600 text-base-content">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
              <li>
                <Link className="flex items-center gap-3" to="/">
                  <FaHome></FaHome> Admin Home
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3"
                  to="/dashboard/manage-class"
                >
                  <FaEdit></FaEdit> Manage Class
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-3"
                  to="/dashboard/all-users"
                >
                  <FaUserEdit></FaUserEdit> Manage Users
                </Link>
              </li>
            </>
          ) :isInstructor?
          
          <>
          <li>
                <Link to="/dashboard/add-class">
                   <MdBorderColor></MdBorderColor> Add Class
                </Link>
              </li>
              <li>
                <Link>
                <BsCheckAll></BsCheckAll> My classes 
                </Link>
              </li>

          </>: (
            <>
               <li>
                <Link to="/">
                  <FcHome></FcHome> User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-cart">
                   <MdBorderColor></MdBorderColor> All Selected Classes
                </Link>
              </li>
              <li>
                <Link>
                <BsCheckAll></BsCheckAll> Enrollment Class
                </Link>
              </li>
              <li>
                <Link>
                  <FaWallet></FaWallet> Payment History
                </Link>
              </li>
            </>
          )}
          <div className="divider  bg-red-700"></div>
              <li>
                <Link to="/">
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link to="/all-classes">
                  <FaBorderAll></FaBorderAll> All Classes
                </Link>
              </li>
              <li>
                <Link>
                  <VscThreeBars></VscThreeBars> Menu
                </Link>
              </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
