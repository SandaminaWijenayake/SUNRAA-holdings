import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/Sweet-Fresh-Tender-King-Coconut-plantation-in-sri-lanka.jpg";

export const WhoweAre = () => {
  return (
    <>
      <div className="w-11/12 m-auto md:hidden block pt-[80px]">
        <div className="leading-[10px]">
          <motion.p
            className="font-allura text-[26px] text-[#FF3C14] font-extrabold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Who we are?
          </motion.p>
          <motion.h1
            className="font-lora text-[30px] font-medium mb-5 leading-[40px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Pioneering Ceylon’s Premium Exports
          </motion.h1>
        </div>
        <motion.p
          className="font-karla text-base mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Ceylonese Exports, based in Nittambuwa, Sri Lanka, specializes in
          exporting fresh King Coconuts with the unique Ceylon taste. Our
          innovative approach ensures premium quality, supporting local jobs and
          delivering global excellence.
        </motion.p>
      </div>

      <div className="xl:w-[1290px] w-full px-3 lg:px-0 h-[421px] md:h-[505px] lg:h-[705px] m-auto items-center flex">
        <div className="lg:w-[580px] w-full m-auto h-[421px] md:h-[505px] gap-2 flex">
          <motion.div
            className="xl:w-[318px] w-2/3 lg:w-[289px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={image1}
              className="object-cover object-left h-full"
              alt=""
            />
          </motion.div>
          <motion.div
            className="lg:w-[221px] w-1/3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={image1}
              className="object-cover object-right h-full"
              alt=""
            />
          </motion.div>
        </div>

        <div className="w-[709px] xl:pl-[70px] px-[30px] hidden md:block">
          <motion.p
            className="font-allura text-[40px] text-[#FF3C14] leading-3 font-bold mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Who we are?
          </motion.p>
          <motion.div
            className="font-lora text-[40px] lg:text-[48px] font-medium mb-5 leading-[50px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="elementor-heading-title elementor-size-default">
              Pioneering Ceylon's Premium Exports
            </h1>
          </motion.div>
          <motion.p
            className="font-karla text-base mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Ceylonese Exports, based in Nittambuwa, Sri Lanka, specializes in
            exporting fresh King Coconuts with the unique Ceylon taste. Our
            innovative approach ensures premium quality, supporting local jobs
            and delivering global excellence.
          </motion.p>
        </div>
      </div>
    </>
  );
};
