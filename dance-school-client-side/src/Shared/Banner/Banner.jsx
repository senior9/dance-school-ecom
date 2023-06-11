import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../assets/slider/slider-1.jpg"
import slide2 from "../../assets/slider/slider-2.jpg"
import slide3 from "../../assets/slider/slider-3.jpg"

const Banner = () => {
    return (
        <div className=''>
            <Carousel  >
                <div>
                    <img src={slide1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slide2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slide3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;