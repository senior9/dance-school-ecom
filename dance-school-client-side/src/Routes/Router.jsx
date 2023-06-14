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
    loader:()=>fetch(`https://dance-school-server-phi.vercel.app/classCollection`)
  },
  {
    path:"dashboard",
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:"my-cart",
      element:<MyCart></MyCart>
      },
      {
        path:"all-users",
      element:<AllUser></AllUser>
      }

    ],
  }
  
]);
export default router;
