import React from "react";
import image1 from "../../assets/images/King-coconut-export-process-in-sri-lanka.jpg";

export const WhatWeDo = () => {
  return (
    <>
      <div className="w-11/12 m-auto md:hidden block pt-[80px]">
        <div className="leading-[10px]">
          <p className="font-allura text-[26px] text-[#FF3C14]   font-extrabold mb-5">
            What we do?
          </p>
          <h1 className="font-lora text-[30px] font-medium mb-5 leading-[40px]">
            Elevating Ceylon Flavors Globally
          </h1>
        </div>
        <p className="font-karla text-base mb-5">
          Ceylonese Exports specializes in sourcing, processing, and exporting
          fresh King Coconuts with a distinctive Ceylon taste. Our innovative
          methods ensure top quality, benefiting the global market and creating
          local jobs. Experience Sri Lanka's finest with us.
        </p>
      </div>
      <div className="xl:w-[1290px] w-full px-3 lg:px-0 h-[421px]  md:h-[705px]  m-auto  items-center flex">
        <div className="lg:w-[580px] w-full m-auto h-[421px] md:h-[505px] gap-2 flex">
          <div className="w-1/3  lg:w-[221px]">
            <img
              src={image1}
              className="object-cover object-left h-full"
              alt=""
            />
          </div>
          <div className="xl:w-[318px] lg:w-[289px] w-2/3">
            <img
              src={image1}
              className="object-cover object-right  h-full"
              alt=""
            />
          </div>
        </div>
        <div className="w-[709px] xl:pl-[70px] px-[30px] hidden md:block">
          <p className="font-allura text-[40px] text-[#FF3C14] leading-3  font-bold mb-5">
            What we do?
          </p>
          <div className="font-lora text-[40px] lg:text-[48px] font-medium mb-5 leading-[50px]">
            <h1 className="elementor-heading-title elementor-size-default">
              Elevating Ceylon Flavors Globally
            </h1>{" "}
          </div>
          <p className="font-karla text-base mb-5">
            Ceylonese Exports specializes in sourcing, processing, and exporting
            fresh King Coconuts with a distinctive Ceylon taste. Our innovative
            methods ensure top quality, benefiting the global market and
            creating local jobs. Experience Sri Lanka's finest with us.
          </p>
        </div>
      </div>
    </>
  );
};
