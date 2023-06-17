import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./Slide.css";

import slider1 from "../../assets/slider/slider-1.jpg"
import slider2 from "../../assets/slider/slider-2.jpg"
import slider3 from "../../assets/slider/slider-3.jpg"

const Slider = () => {
  return (
    <div className="slider-section mb-20">
      <AwesomeSlider>
        <div data-src={slider1} className="slider-item">
          <div className="slider-content w-96">
            <h2 className="slider-title">Join Our Dance School</h2>
            <p className="slider-description">Experience the joy of dancing and express yourself.</p>
            <div className='mt-5'>
              <button className='btn btn-outline btn-warning font-semibold text-white'>Explore Your Journey</button>
            </div>
          </div>
        </div>
        <div data-src={slider2} className="slider-item">
          <div className="slider-content w-96">
            <h2 className="slider-title">Learn from Talented Instructors</h2>
            <p className="slider-description">Our instructors are passionate about teaching and will help you reach your full potential.</p>
            <div className='mt-5'>
              <button className='btn btn-outline btn-warning font-semibold text-white'>Explore Your Journey</button>
            </div>
          </div>
        </div>
        <div data-src={slider3} className="slider-item">
          <div className="slider-content w-96">
            <h2 className="slider-title text-7xl">Discover Various Dance Styles</h2>
            <p className="slider-description">Explore a wide range of dance styles, from ballet to hip hop, and find your favorite.</p>
            <div className='mt-5'>
              <button className='btn btn-outline btn-warning font-semibold text-white'>Explore Your Journey</button>
            </div>
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
