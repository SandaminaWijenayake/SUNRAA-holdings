import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import image1 from "../assets/images/pexels-samer-daboul-1652001.jpg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      <div className="h-[942px]  relative pt-[81px] z-0 overflow-hidden w-full bg-center bg-cover ">
        <div className="relative  w-full h-full">
          <img src={image1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute text-center md:text-left top-1/2 left-1/2 max-w-[1290px] w-full h-screen flex flex-col justify-center text-white p-6 transform -translate-x-1/2 -translate-y-1/2">
            <motion.h1
              className="md:text-4xl text-2xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              The Sweetness From Lips Through Heart
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-4 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Feel the King's Touch with Ceylon King Coconut and unlock the
              delight of sun-kissed sweetness in every sip, bringing you a
              tropical paradise.
            </motion.p>

            {/* Button */}
            <motion.div
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button className="mt-6 md:px-6 md:py-3 font-karla py-3 px-7 font-light bg-orange-500 text-white text-base rounded-sm hover:bg-orange-600 transition">
                JOIN OUR BUYER COMMUNITY
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
