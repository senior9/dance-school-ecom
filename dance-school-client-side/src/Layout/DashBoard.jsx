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

const DashBoard = () => {
  const [cart] = useOrder();
  const isAdmin = true;
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

          {
            isAdmin ? 
            <>
            <li>
            <Link className="flex items-center gap-3" to="/dashboard/home">
              <FaHome></FaHome> Admin Home
              </Link>
                
          </li>
            <li>
            <Link className="flex items-center gap-3" to="/dashboard/my-cart">
              <FaEdit></FaEdit> Manage Class
              </Link>
                
          </li>
          <li>
            <Link className="flex items-center gap-3" to="/dashboard/all-users">
              <FaUserEdit></FaUserEdit> Manage Users
              </Link>
           
          </li>
            </>
            :
            <>
            <div className="divider  bg-red-700"></div>
          <li>
            <Link to="/my-cart">
              <FaHome></FaHome> Home
            </Link>
          </li>
          <li>
            <Link>
              <FaBorderAll></FaBorderAll> All Classes
            </Link>
          </li>
          <li>
            <Link>
              <VscThreeBars></VscThreeBars> Menu
            </Link>
          </li>
            </>
          }
          
          
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
