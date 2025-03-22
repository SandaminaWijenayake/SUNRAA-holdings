import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../assets/images/Logo2Final.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

const onHover = {
  ":hover": { color: "#FF9A00" },
};

const Footer = () => {
  return (
    <div className="bg-black h-full pt-10  text-white font-karla text-base">
      <div className="md:flex w-11/12 lg:w-9/12 m-auto  py-16">
        <div className="w-1/3">
          <h1>
            <img className="w-16" src={logo} alt="" />
          </h1>
          <p className="pt-2 text-base">
            Savor Sri Lanka's finest with Fresh King Coconuts from Ceylonese
            Exports Pvt Ltd. Experience premium flavors, sustainably sourced.
            Explore now !
          </p>
          <div className="w-1/3 hidden sm:block">
            <div className="flex justify-between my-5  ">
              <Link>
                <FacebookOutlinedIcon fontSize="medium" sx={onHover} />
              </Link>
              <Link to="https://x.com/jagath_tou38334 ">
                <TwitterIcon fontSize="medium" sx={onHover} />
              </Link>
              <Link to="https://www.instagram.com/geniuslankatours/">
                <InstagramIcon fontSize="medium" sx={onHover} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 m-auto text-base mt-9 leading-9 text-center md:mt-0">
          <h1 className="text-[22px] font-semibold text-left md:text-center mb-8">
            Quick links
          </h1>
          <div className="ml-[20px] md:flex justify-center">
            <ul className=" md:grid-cols-1 grid-cols-2   gap-x-8 gap-y-2">
              <li className="flex items-center  hover:text-[#FF9A00]">
                <span className="w-2.5 h-2.5 bg-[#FF7800] rounded-full mr-2"></span>
                <Link to="/">Home</Link>
              </li>
              <li className="flex items-center hover:text-[#FF9A00]">
                <span className="w-2.5 h-2.5 bg-[#FF7800] rounded-full mr-2"></span>
                <Link to="/Health_Benefits">Health Benefits</Link>
              </li>
              <li className="flex items-center hover:text-[#FF9A00]">
                <span className="w-2.5 h-2.5 bg-[#FF7800] rounded-full mr-2"></span>
                <Link to="/about_us">About us</Link>
              </li>

              <li className="flex items-center hover:text-[#FF9A00]">
                <span className="w-2.5 h-2.5 bg-[#FF7800] rounded-full mr-2"></span>
                <Link to="/contact_us">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:flex md:w-1/3 min-w-[267px] mt-9 md:mt-0">
          <div className="sm:w-full   text-base leading-9 text-left">
            <h1 className="text-[22px] font-semibold text-left  mb-8">
              Get in Touch With Us
            </h1>
            <p className=" ">
              <LocalPhoneIcon sx={{ marginRight: "15px", color: "#FF7800" }} />
              +94 70 767 6707
            </p>
            <p className="">
              <EmailIcon sx={{ marginRight: "15px", color: "#FF7800" }} />
              Geniuslankatours01@gmail.com
            </p>
            <p className="w-full flex items-start ">
              <TelegramIcon sx={{ marginRight: "15px", color: "#FF7800" }} />
              <span className="inline-block w-full">
                237/B Owitigama Meegoda.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="w-8/12 m-auto py-5 text-xs font-medium text-[#9b9b9b] justify-between flex">
          <div className="">
            <p className=" text-sm w-11/12 m-auto py-5 ">
              © 2024 Ceylonese Exports (Pvt) Ltd. All Rights Reserved.
            </p>
          </div>

          <div className=" py-5 text-sm ">
            <p className="hover:text-[#01b3a7] cursor-pointer">
              Developed by Prism Labs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
