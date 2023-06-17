import { useQuery } from "@tanstack/react-query";
import React from "react";
import CommonPart from "../../Shared/CommonPart/CommonPart";
import commonImage from "../../assets/menu/menu-2.jpg";
import { Link } from "react-router-dom";

const PopularSection = () => {
  const commonTitle = "Hottest Dance Classes: Unleash Your Moves! ";
  const description =
    "Join our popular dance classes and ignite your passion for dance. Learn various styles from expert instructors.";

  const { data: popularClasses = [], isLoading } = useQuery({
    queryKey: "popularClasses",
    queryFn: async () => {
      const res = await fetch("https://dance-school-server-senior9.vercel.app/popular-classes");
      return res.json();
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5 ">
      <div className="mb-5">
        <CommonPart
          commontitle={commonTitle}
          description={description}
          image={commonImage}
        ></CommonPart>
      </div>
      <div className="container mx-auto">
        <div className="divider"></div>
        <h1 className="text-5xl text-center font-bold text-emerald-700"> Popular Dance Classes</h1>
        <div className="divider"></div>
      </div>
      <div className="container mx-auto lg:grid lg:grid-cols-3 gap-10">
      {popularClasses.map((classItem) => (
        <div key={classItem.key} className="grid">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={classItem.class_image} alt="Class" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{classItem.class_name}</h2>
              <p>Popular Dance Programs: Elevate Your Dance Skills!</p>
              <p>Avilable Seat:{classItem.available_seats}</p>
              <p>Total Students: {classItem.students}</p>
              <div className="card-actions justify-end">
                <Link to="/all-classes" className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PopularSection;
