import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import CoverImage from '../../Shared/CoverImage/CoverImage';
import classesImage from "../../assets/classes/classes-3.png"
import { useLoaderData } from 'react-router-dom';
import SingleClass from './SingleClass/SingleClass';
import Footer from "../../Shared/Footer/Footer"

const AllClasses = () => {
    const data = useLoaderData();
    console.log(data);

    const title =" Explore, Enroll, and Enhance Your Skills";
    const text = "Embark on a journey of knowledge with captivating classes, renowned instructors, and seamless enrollment. Discover now!";
    const input = "Explore & Enroll";
    
    const className = "mb-5 text-white text-lg";
    return (
        <div>
            <Navbar></Navbar>
           
           <CoverImage className={className} img={classesImage} title={title} text={text} input={input}>
                
           </CoverImage>

           <div className='grid lg:grid-cols-2 container mx-auto gap-32 mt-10 '>
           {
            data.map((singleClass) =><SingleClass
            key={singleClass.id}
            singleClass={singleClass}
            > </SingleClass>
           )}
           </div>
            <Footer></Footer>
        </div>
    );
};

export default AllClasses;