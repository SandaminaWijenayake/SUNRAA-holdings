import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/images/King-coconut-drinking-girl-beach.jpg";
import image2 from "../assets/images/Sweet-Fresh-Tender-King-Coconut-high-quality.jpg";
import { useNavigate } from "react-router";

export const SecondSection = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full flex mb-[100px] items-center md:bg-[linear-gradient(to_right,#000000_40%,#FFFFFF_40%)]">
        <div className="xl:w-[1290px] w-full md:h-[705px] m-auto items-center flex">
          <motion.div
            className="lg:w-[580px] w-11/12 m-auto h-[421px] md:h-[505px] gap-3 md:gap-5 flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="lg:w-[221px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={image1}
                className="object-cover object-left h-full"
                alt=""
              />
            </motion.div>
            <motion.div
              className="xl:w-[318px] lg:w-[289px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={image2} className="object-cover h-full" alt="" />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-[709px] xl:pl-[70px] pl-[40px] pr-[50px] hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-allura text-[40px] text-[#FF3C14] leading-3 font-bold mb-5">
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
            <ul className="grid font-karla grid-cols-2 mb-10 list-inside list-disc marker:text-2xl marker:text-[#FF3C14]">
              <li>Abundant Nutrients</li>
              <li>Hydration Powerhouse</li>
              <li>Exquisite Flavor</li>
              <li>Ayurvedic Tradition</li>
            </ul>
            <motion.button
              onClick={() => navigate("/Health_Benefits")}
              className="py-5 px-8 bg-[#FF9A00] text-white font-extralight font-karla text-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              LEARN MORE
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile View */}
      <motion.div
        className="w-11/12 m-auto pb-[80px] lg:hidden block"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="leading-[10px]">
          <p className="font-allura text-[26px] text-[#FF3C14] font-bold mb-5">
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
        <ul className="grid font-karla sm:grid-cols-2 mb-10 list-inside list-disc marker:text-2xl marker:text-[#FF3C14]">
          <li>Abundant Nutrients</li>
          <li>Hydration Powerhouse</li>
          <li>Exquisite Flavor</li>
          <li>Ayurvedic Tradition</li>
        </ul>
        <motion.button
          onClick={() => navigate("/Health_Benefits")}
          className="py-5 px-8 bg-[#FF9A00] text-white font-extralight font-karla text-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          LEARN MORE
        </motion.button>
      </motion.div>
    </div>
  );
};
