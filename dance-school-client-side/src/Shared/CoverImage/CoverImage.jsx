import React from "react";
import menuImage from "../../assets/menu/menu-8.jpg";

const CoverImage = () => {
  return (
    <div
      className="hero h-[700px] "
      style={{ backgroundImage: `url("${menuImage}")` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        
      </div>
    </div>
  );
};

export default CoverImage;
