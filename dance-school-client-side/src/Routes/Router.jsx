import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AdminDashBoard from "../DashBoard/AdminDashBoard";
import PrivateRoute from "../Private/PrivateRoute";

import MyCart from "../DashBoard/MyCart/MyCart";
import DashBoard from "../Layout/DashBoard";
import AllUser from "../DashBoard/AllUsers/AllUser";
import AdminRoute from "../Private/AdminRoute";

import AddClass from "../DashBoard/AddClass/AddClass";
import RouteInstructor from "../Private/RouteInstructor";
import ManageAllClasses from "../DashBoard/ManageAllClasses/ManageAllClasses";
import UserPayment from "../DashBoard/UserPayment/UserPayment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/instructors",
    element: <Instructors></Instructors>,
  },
  {
    path: "all-classes",
    element: <AllClasses></AllClasses>,
    loader:()=>fetch(`http://localhost:5000/classCollection`)
  },
  {
    path:"dashboard",
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:"my-cart",
      element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path:"payment",
      element:<PrivateRoute><UserPayment></UserPayment></PrivateRoute>
      },
      {
        path:"all-users",
      element:<AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
      path:"add-class",
      element: <RouteInstructor><AddClass></AddClass></RouteInstructor>
      },
      {
        path:'manage-class',
        element:<AdminRoute><ManageAllClasses></ManageAllClasses></AdminRoute>
      }

    ],
  }
  
]);
export default router;
