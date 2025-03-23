import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const ProductDescription = () => {
  return (
    <div className="max-w-[1290px] m-auto py-20 px-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-[40px] font-allura text-center text-[#FF3C14] font-bold"
      >
        Product Description
      </motion.div>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="font-lora md:text-5xl text-3xl text-center font-semibold"
      >
        Discover the Essence of Pure Refreshment
      </motion.h1>
      <div className="grid md:grid-cols-2 mt-[80px] gap-5">
        {[
          "Freshness Guaranteed",
          "Tropical Flavor",
          "Optimal Hydration",
          "Quality Assurance",
        ].map((title, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`md:flex md:max-w-[510px] ${
              index % 2 !== 0 ? "md:mt-[76px]" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6 },
              }}
              viewport={{ once: true }}
              className="min-w-[89px]"
            >
              <WorkspacePremiumIcon
                sx={{
                  fontSize: "70px",
                  border: "solid #FF3E41",
                  color: "#FF3E41",
                }}
              />
            </motion.div>
            <div>
              <h1 className="text-[26px] h-[54px] flex items-center my-2 font-robotoSlab">
                {title}
              </h1>
              <div className="md:max-w-[421px] text-base font-karla text-justify">
                {index === 0 &&
                  "Our Young King Coconuts boast a circumference of over 15.5 inches. Each is carefully wrapped in cling film to preserve freshness and packaged in sturdy corrugated boxes. Each box contains 6 nuts, ensuring they arrive in perfect condition, ready to satisfy your craving for fresh, just-picked excellence."}
                {index === 1 &&
                  "Discover the culinary versatility of our Young King Coconuts, with tender flesh perfect for savory and sweet dishes. Add a tropical twist to salads, desserts, curries, or smoothies. Our handpicked coconuts bring fresh flavor and creamy texture to every bite. Indulge in paradise with our premium selection, elevating your cooking to new heights of deliciousness."}
                {index === 2 &&
                  "Our King Coconuts are perfect for hydration and fluid balance. Packed with antioxidants, they combat oxidative stress and inflammation. Their natural sugars provide quick energy, ideal for athletes. With low calories and fat, they're great for weight and health-conscious individuals. Incorporate King Coconuts into your diet for overall well-being and a healthy lifestyle."}
                {index === 3 &&
                  "Our export-quality King Coconut products are meticulously inspected to ensure they are free from pests like mites, beetles, and caterpillars, as well as diseases such as fungal infections and bud rot. We maintain the health and quality of our King Coconut palms with great care, delivering pristine products to our customers."}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
