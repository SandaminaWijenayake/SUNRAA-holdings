import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
export const Quote = () => {
  return (
    <div className="lg:w-[750px] w-8/12   m-auto pb-[140px]">
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
          <div className="font-lora text-[28px] text-center italic">
            "Our bodies need real, fresh food to maintain health.."
          </div>
          <div className="border-x-[1px] border-orange-500 h-[20px] w-0 m-auto "></div>
          <div className="font-karla text-center text-orange-500 text-lg">
            Louise Hay
          </div>
        </div>
      </div>
    </div>
  );
};
