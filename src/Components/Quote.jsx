import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const useTypewriter = (text, delay = 50) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [text, delay]);

  return displayedText;
};

export const Quote = () => {
  const quote = `"Our bodies need real, fresh food to maintain health.."`;
  const typedQuote = useTypewriter(quote, 50);
  return (
    <motion.div
      className="lg:w-[750px] w-8/12 m-auto pb-[140px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div>
        <div className="-translate-x-28 translate-y-10">
          <FormatQuoteIcon
            sx={{
              fontSize: "200px",
              padding: "0px",
              margin: "0px",
              color: "gray",
              transform: "scaleX(-1) scaleY(-1)",
            }}
          />
        </div>
        <div className="grid gap-3">
          <motion.div
            className="font-lora text-[28px] text-center italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {typedQuote}
          </motion.div>
          <div className="border-x-[1px] border-orange-500 h-[20px] w-0 m-auto"></div>
          <motion.div
            className="font-karla text-center text-orange-500 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
          >
            Louise Hay
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
