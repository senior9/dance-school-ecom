import React from 'react';
import "./Commonpart.css";
import commonImage from "../../assets/menu/menu-9.jpg"
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CommonPart = ({commontitle, description,image}) => {

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // Add other styles as needed
  };

    return (
      
            <div style={backgroundStyle} class="bg-gray-100  bg-fixed text-white p-16">
                
          <div class="container mx-auto">
            <div class="flex items-center  py-20 bg-opacity-5 justify-center">
              <div class="max-w-xl  ">
                <h2 class="text-5xl font-bold mb-4">
                  Welcome to meet  <br /> {commontitle}
                </h2>
                <p class="text-lg  text-white">
                  {description}
                </p>
                <div className='lg:flex items-center  justify-between'>
                <Link
                  to="/all-classes"
                  className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold  px-4 py-3 rounded"
                >
                  Enroll Class
                </Link>
                <Link to="/instructors">
                <FaArrowAltCircleRight className='text-5xl text-yellow-500'></FaArrowAltCircleRight>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    );
};

export default CommonPart;