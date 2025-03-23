import React from "react";
import { motion } from "framer-motion";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/images/Logo2Final.png";
import { Link } from "react-router";
import contactDetails from "../Constants/contactUs";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <div className="bg-black h-full pt-10 text-white font-karla text-base">
      <div className="md:flex w-11/12 lg:w-9/12 m-auto py-16">
        {/* Logo & Intro */}
        <div className="md:w-1/3">
          <div className="font-bold w-[88px] text-white flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-[60px]" />
            <motion.span
              className="text-xl flex flex-col leading-none w-full"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
            >
              SUNRAA
              <span className="text-[17px] w-full font-light text-center">
                HOLDINGS
              </span>
            </motion.span>
          </div>
          <motion.p
            className="pt-2 text-base"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Savor Sri Lanka's finest with Fresh King Coconuts from Ceylonese
            Exports Pvt Ltd. Experience premium flavors, sustainably sourced.
            Explore now!
          </motion.p>
          <div className="w-1/2 sm:block">
            <div className="flex justify-between my-5">
              <Link>
                <FacebookOutlinedIcon fontSize="medium" />
              </Link>
              <Link to="https://x.com/jagath_tou38334">
                <TwitterIcon fontSize="medium" />
              </Link>
              <Link to="https://www.instagram.com/geniuslankatours/">
                <InstagramIcon fontSize="medium" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 m-auto text-base mt-9 leading-9 text-center md:mt-0">
          <motion.h1
            className="text-[22px] font-semibold text-left md:text-center mb-8"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Quick Links
          </motion.h1>
          <ul className="ml-[20px] md:flex justify-center">
            {["Home", "About us", "Contact us"].map((link, index) => (
              <motion.li
                key={index}
                className="flex items-center hover:text-[#FF9A00]"
                initial="hidden"
                whileInView="visible"
                variants={textVariants}
                viewport={{ once: true }}
              >
                <span className="w-2.5 h-2.5 bg-[#FF7800] rounded-full mr-2"></span>
                <Link to={`/${link.replace(" ", "_").toLowerCase()}`}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="w-full sm:flex md:w-1/3 min-w-[267px] mt-9 md:mt-0">
          <div className="sm:w-full text-base leading-9 text-left">
            <motion.h1
              className="text-[22px] font-semibold text-left mb-8"
              initial="hidden"
              whileInView="visible"
              variants={textVariants}
              viewport={{ once: true }}
            >
              Get in Touch With Us
            </motion.h1>
            <div>
              {contactDetails.map(({ id, title, value, icon: Icon }) => (
                <motion.div
                  key={id}
                  className="flex items-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  viewport={{ once: true }}
                >
                  <Icon className="text-[#FF7800]" /> <p>{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-black">
        <div className="w-11/12 gap-7 lg:w-9/12 m-auto py-5 text-xs font-medium text-[#9b9b9b] flex justify-between">
          <motion.p
            className="text-sm py-5"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            © SUNRAA Holdings (Pvt) Ltd. All Rights Reserved.
          </motion.p>

          <motion.p
            className="hover:text-[#01b3a7] cursor-pointer text-sm py-5"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            Developed by Prisma Labs
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
