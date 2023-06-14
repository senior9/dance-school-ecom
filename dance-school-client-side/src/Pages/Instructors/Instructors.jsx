import React, { useEffect, useState } from "react";
import insructors from "../../assets/Instructors/instructors-2.png";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import CoverImage from "../../Shared/CoverImage/CoverImage";
import SingleInstructor from "./SingleInstructor/SingleInstructor";
import CommonPart from "../../Shared/CommonPart/CommonPart";
const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  // coverImage Info
  const title = " Mentor Empowering Students' Artistic Growth";
  const text =
    "Dance instructors are passionate, skilled professionals who guide and inspire students in their dance journey. ";
    const className = "mb-5 text-orange-400 text-lg"

  //
  useEffect(() => {
    fetch(`http://localhost:5000/classCollection`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructors(data);
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <CoverImage
      className={className}
        img={insructors}
        title={title}
        text={text}
        input={"Lets Explore"}
      ></CoverImage>
      <div className="mt-5">
        <CommonPart></CommonPart>
      </div>
      <div className="bg-slate-300 rounded-xl p-16">
        <div className="container mx-auto lg:grid   grid-cols-3 gap-9">
          {instructors.map((insructors) => (
            <SingleInstructor
              key={insructors.id}
              insructors={insructors}
            ></SingleInstructor>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Instructors;
