import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  return (
    <>
      <div className="xl:w-[1290px] w-full lg:px-0 pb-[120px] m-auto pt-[80px] md:pt-0 items-center xl:flex overflow-hidden">
        <motion.div
          className="px-3 xl:w-[580px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-allura text-[26px] md:text-[40px] text-[#FF3C14] leading-3 font-bold mb-5">
            Why choose us?
          </p>
          <div className="font-lora text-[30px] md:text-[40px] lg:text-[48px] font-medium mb-5 leading-[40px]">
            <h1 className="elementor-heading-title elementor-size-default">
              Experience Excellence, Taste the Difference
            </h1>
          </div>
          <div className="text-justify">
            <p className="font-karla text-base mb-5">
              Experience the royal treatment with Ceylonese Exports' King
              Coconuts. With an unwavering commitment to quality...
            </p>
            <p>
              At Ceylonese Exports, we pride ourselves on transparency and
              innovative packaging that preserves the freshness...
            </p>
          </div>
        </motion.div>
        <div className="xl:w-[626px] w-full md:w-11/12 m-auto gap-2 flex">
          <div className="max-w-[1290px] m-auto">
            <div className="grid md:grid-cols-2 mt-[50px] gap-1">
              {[
                {
                  Icon: ThumbUpIcon,
                  title: "Food Trading Expertise",
                  text: "Decades in food industry, your top choice for trading.",
                },
                {
                  Icon: HandshakeIcon,
                  title: "Trust in Excellence",
                  text: "Trusted & Legally Approved Certified Services",
                },
                {
                  Icon: StarIcon,
                  title: "Premium Services",
                  text: "Delivering top-quality services for healthy, fresh food.",
                },
                {
                  Icon: AccessTimeFilledIcon,
                  title: "Time commitment",
                  text: "Punctuality and commitment to deadlines",
                },
              ].map(({ Icon, title, text }, index) => (
                <div
                  key={index}
                  className={`md:flex md:max-w-[510px] text-center md:text-left pt-5 ${
                    index % 2 === 1 ? "md:mt-[90px]" : ""
                  }`}
                >
                  <motion.div
                    className="min-w-[89px] text-center"
                    initial={{ rotate: -90, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Icon
                      sx={{
                        fontSize: "30px",
                        border: "solid #FF3E41",
                        color: "#FF3E41",
                        padding: "5px",
                        boxSizing: "content-box",
                      }}
                    />
                  </motion.div>
                  <div>
                    <motion.h1
                      className="text-2xl flex justify-center md:justify-start items-center my-2 font-robotoSlab"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {title}
                    </motion.h1>
                    <motion.div
                      className="md:max-w-[421px] text-center md:text-left text-sm font-karla"
                      initial={{ filter: "blur(5px)", opacity: 0 }}
                      whileInView={{ filter: "blur(0px)", opacity: 1 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      {text}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
