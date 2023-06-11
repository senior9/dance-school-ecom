import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

import CoverImage from '../../Shared/CoverImage/CoverImage';

const Home = () => {
    return (
        <div className=''>
            <CoverImage></CoverImage>
            
        </div>
    );
};

export default Home;