import React from "react";
import menuImage from "../../assets/menu/menu-8.jpg";
import { info } from "autoprefixer";

const CoverImage = ({ img, title, text, input }) => {
  return (
    <div
      className="hero h-[700px]"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5 text-orange-400 text-lg">{text}</p>
          <button className="btn btn-error w-1/3 text-white text-lg btn-outline">
            {input}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
