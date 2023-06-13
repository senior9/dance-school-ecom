import React from "react";
import menuImage from "../../assets/menu/menu-8.jpg";
import { info } from "autoprefixer";

const CoverImage = ({ img, title, text, input,className }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl space-y-5">
          <h1 className="text-white text-5xl font-bold">{title}</h1>
          <p className={className}>{text}</p>
          <button className="btn btn-error w-1/3 h-16 text-white text-lg btn-outline">
            {input}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
