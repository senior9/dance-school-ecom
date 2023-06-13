import React from 'react';
import "./Commonpart.css";
import commonImage from "../../assets/menu/menu-9.jpg"
import { FaArrowAltCircleRight } from 'react-icons/fa';

const CommonPart = () => {
    return (
      
            <div class="bg-gray-100 fixed-background bg-fixed text-white p-16">
                
          <div class="container mx-auto">
            <div class="flex items-center  py-20 bg-opacity-5 justify-center">
              <div class="max-w-xl  ">
                <h2 class="text-5xl font-bold mb-4">
                  Welcome to meet  <br /> our Dance Instructors
                </h2>
                <p class="text-lg  text-white">
                  Join us and discover the joy of dance in a supportive and
                  creative environment. Our experienced instructors will guide
                  you every step of the way.
                </p>
                <div className='lg:flex items-center  justify-between'>
                <a
                  href="#"
                  className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold  px-4 py-3 rounded"
                >
                  Enroll Class
                </a>
                <FaArrowAltCircleRight className='text-5xl text-yellow-500'></FaArrowAltCircleRight>
                </div>
              </div>
            </div>
          </div>
        </div>
       
    );
};

export default CommonPart;