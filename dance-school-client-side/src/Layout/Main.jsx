import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Shared/Banner/Banner';
import Instructors from '../Pages/Instructors/Instructors';

const Main = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
         
        </div>
    );
};

export default Main;