import React from "react";
import image1 from "../assets/images/King-coconut-drinking-girl-beach.jpg";
import image2 from "../assets/images/Sweet-Fresh-Tender-King-Coconut-high-quality.jpg";
import { useNavigate } from "react-router";

export const SecondSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full  flex mb-[100px] items-center bg-[linear-gradient(to_right,#000000_40%,#FFFFFF_40%)]">
        <div className="xl:w-[1290px] w-full  h-[705px]  m-auto  items-center flex">
          <div className="lg:w-[580px] w-11/12 m-auto h-[505px] gap-5 flex">
            <div className="lg:w-[221px]">
              <img src={image1} className="object-cover h-full" alt="" />
            </div>
            <div className="xl:w-[318px] lg:w-[289px]">
              <img src={image2} className="object-cover h-full" alt="" />
            </div>
          </div>
          <div className="w-[709px] xl:pl-[70px] pl-[40px] pr-[50px] hidden lg:block">
            <p className="font-allura text-[40px] text-[#FF3C14] leading-3  font-bold mb-5">
              Taste The Tropics
            </p>
            <h1 className="font-lora text-[48px] font-medium mb-5 leading-[50px]">
              Ceylon's Finest King Coconuts Worldwide
            </h1>
            <p className="font-karla text-base mb-5">
              Discover the natural wonder of Ceylon King Coconuts, where
              abundant nutrients, exquisite flavor, and Ayurvedic tradition
              converge to offer unparalleled refreshment and wellness.
            </p>
            <ul className="grid font-karla grid-cols-2 mb-10 list-inside  list-disc marker:text-2xl marker:text-[#FF3C14]">
              <li>Abundant Nutrients</li>
              <li>Hydration Powerhouse</li>
              <li>Exquisite Flavor</li>
              <li>Ayurvedic Tradition</li>
            </ul>

            <button
              onClick={() => navigate("/Health_Benefits")}
              className="py-5 px-8 bg-[#FF9A00] text-white font-extralight font-karla text-lg"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 m-auto pb-[80px] lg:hidden block">
        <div className="leading-[10px]">
          <p className="font-allura text-[26px] text-[#FF3C14]   font-bold mb-5">
            Taste The Tropics
          </p>
          <h1 className="font-lora text-[30px] font-medium mb-5 leading-[40px]">
            Ceylon's Finest King Coconuts Worldwide
          </h1>
        </div>
        <p className="font-karla text-base mb-5">
          Discover the natural wonder of Ceylon King Coconuts, where abundant
          nutrients, exquisite flavor, and Ayurvedic tradition converge to offer
          unparalleled refreshment and wellness.
        </p>
        <ul className="grid font-karla sm:grid-cols-2 mb-10 list-inside  list-disc marker:text-2xl marker:text-[#FF3C14]">
          <li>Abundant Nutrients</li>
          <li>Hydration Powerhouse</li>
          <li>Exquisite Flavor</li>
          <li>Ayurvedic Tradition</li>
        </ul>

        <button
          onClick={() => navigate("/Health_Benefits")}
          className="py-5 px-8 bg-[#FF9A00] text-white font-extralight font-karla text-lg"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};
