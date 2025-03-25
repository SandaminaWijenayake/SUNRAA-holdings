import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.04 },
  }),
};

const TypingEffect = ({ text }) => {
  return (
    <motion.span initial="hidden" animate="visible">
      {text.split("").map((char, i) => (
        <motion.span key={i} custom={i} variants={textVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const MissonVision = () => {
  return (
    <div className="pt-[40px] w-11/12 m-auto text-center md:mt-[120px]">
      <h1 className="font-lora text-[30px] md:text-[48px] font-medium mb-5 leading-[50px]">
        Welcome to Ceylonese Exports
      </h1>
      <div className="md:flex gap-3 md:pt-[100px] md:pb-[160px] pt-[40px] xl:w-[1140px] m-auto">
        <div className="grid gap-3">
          <div className="font-karla text-center text-[18px] text-orange-500 text-lg">
            Vision
          </div>
          <div className="border-x-[1px] border-orange-500 h-[20px] w-0 m-auto"></div>
          <div className="font-lora text-[18px] lg:text-[28px] text-center italic">
            <TypingEffect text="Being the ambassador of Ceylon rich and diverse flavors through our premium exports." />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="font-karla text-center pt-2 md:pt-0 text-orange-500 text-lg">
            Mission
          </div>
          <div className="border-x-[1px] border-orange-500 h-[20px] w-0 m-auto"></div>
          <div className="font-lora text-[18px] lg:text-[28px] text-center italic">
            <TypingEffect text="To deliver Sri Lanka's authentic tastes worldwide, fostering sustainability and preserving cultural heritage." />
          </div>
        </div>
      </div>
    </div>
  );
};
