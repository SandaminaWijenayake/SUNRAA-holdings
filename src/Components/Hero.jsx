import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import image1 from "../assets/images/pexels-samer-daboul-1652001.jpg";

export const Hero = () => {
  return (
    <>
      <div className="h-screen  relative pt-[81px] z-0 overflow-hidden w-full bg-center bg-cover ">
        <div className="relative  w-full h-full">
          <img src={image1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-1/2 left-1/2 max-w-[1290px] w-full h-[739px] flex flex-col justify-center text-white p-6 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-4xl font-bold ">
              The Sweetness From Lips Through Heart
            </h1>
            <p className="mt-4 text-lg ">
              Feel the King's Touch with Ceylon King Coconut and unlock the
              delight of sun-kissed sweetness in every sip, bringing you a
              tropical paradise.
            </p>
            <div className="flex ">
              <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-sm hover:bg-orange-600 transition">
                JOIN OUR BUYER COMMUNITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
