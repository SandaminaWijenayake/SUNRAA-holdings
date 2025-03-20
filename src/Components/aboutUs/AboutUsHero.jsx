import React from "react";
import image from "../../assets/images/King-coconut-export-process-in-sri-lanka-shipment-all-e1716036460531.jpg";

export const AboutUsHero = () => {
  return (
    <div className="relative w-full max-w-screen">
      <div className="absolute inset-0 bg-black/50  "></div>
      <img src={image} alt="" className="w-full h-[466px] object-cover" />
      <div className="absolute flex items-end  bottom-[33%] left-[16%] w-[80%]  z-10 text-white max-w-[1290px]  text-5xl font-lora">
        About Us
      </div>
    </div>
  );
};
