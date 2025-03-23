import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PublicIcon from "@mui/icons-material/Public";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const IntroCards = () => {
  return (
    <>
      <div className="block gap-6 lg:flex justify-center z-30 lg:-translate-y-10">
        <motion.div
          className="xl:w-[385px] xl:h-[148px] lg:h-[200px] lg:w-[300px] shadow-[0px_10px_20px_rgba(0,0,0,0.5)]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex p-[25px] bg-white">
            <div className="min-w-12">
              <LocalShippingIcon fontSize="large" sx={{ color: "#F69A02" }} />
            </div>
            <div>
              <h1 className="font-lora text-lg text-orange-500">
                Quality King Coconuts
              </h1>
              <p className="font-karla text-base">
                Savor the top-quality taste of our handpicked King Coconuts,
                sourced from lush Ceylon groves.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="xl:w-[385px] xl:h-[148px] lg:h-[200px] lg:w-[300px] shadow-[0px_10px_20px_rgba(0,0,0,0.5)]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex p-[25px] bg-white">
            <div className="min-w-12">
              <CreditScoreIcon fontSize="large" sx={{ color: "#F69A02" }} />
            </div>
            <div>
              <h1 className="font-lora text-lg text-orange-500">
                Transparent Transactions
              </h1>
              <p className="font-karla text-base">
                Trust us for secure and straightforward deals, ensuring you
                always get the best value.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="xl:w-[385px] xl:h-[148px] lg:h-[200px] lg:w-[300px] shadow-[0px_10px_20px_rgba(0,0,0,0.5)]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex p-[25px] bg-white">
            <div className="min-w-12">
              <PublicIcon fontSize="large" sx={{ color: "#F69A02" }} />
            </div>
            <div>
              <h1 className="font-lora text-lg text-orange-500">
                Fast Worldwide Shipping
              </h1>
              <p className="font-karla text-base">
                Enjoy fast, efficient delivery of King Coconuts, ensuring peak
                freshness upon arrival.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
