import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

import menuImage from "../../assets/menu/menu-8.jpg";
import CoverImage from '../../Shared/CoverImage/CoverImage';
import PopularSection from '../PopularSection/PopularSection';
import Slider from '../../Shared/Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            {/* <CoverImage img={menuImage}></CoverImage> */}
            <Slider></Slider>
            <PopularSection></PopularSection>
            
            
        </div>
    );
};

export default Home;