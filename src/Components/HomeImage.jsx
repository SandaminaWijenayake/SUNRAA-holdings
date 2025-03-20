import React from "react";
import image from "../assets/images/b-1.jpg";
import { useNavigate } from "react-router";

function HomeImage() {
  return (
    <div
      className="relative w-full h-[540px] overflow-hidden mt-[120px] font-Montserrat bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="absolute inset-0 flex lg:w-3/5 xl:w-2/5 w-4/5 m-auto flex-col items-center font-normal justify-center text-center z-10 text-white">
        <div className="text-[40px] font-allura text-red-500">
          Uplifting Rural Lives
        </div>
        <h2 className="text-5xl font-lora mt-4">Education and Economy</h2>
        <p className="font-karla text-base max-w-2xl mt-2">
          Our exports fuel education, fostering prosperity, and sowing the seeds
          of sustainable growth.
        </p>
      </div>
    </div>
  );
}

export default HomeImage;
