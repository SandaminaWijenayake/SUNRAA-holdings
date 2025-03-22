import React from "react";
import image1 from "../../assets/images/Sweet-Fresh-Tender-King-Coconut-plantation-in-sri-lanka.jpg";

export const WhoweAre = () => {
  return (
    <>
      <div className="w-11/12 m-auto md:hidden block pt-[80px]">
        <div className="leading-[10px]">
          <p className="font-allura text-[26px] text-[#FF3C14]   font-extrabold mb-5">
            Who we are?
          </p>
          <h1 className="font-lora text-[30px] font-medium mb-5 leading-[40px]">
            Pioneering Ceylon’s Premium Exports{" "}
          </h1>
        </div>
        <p className="font-karla text-base mb-5">
          Ceylonese Exports, based in Nittambuwa, Sri Lanka, specializes in
          exporting fresh King Coconuts with the unique Ceylon taste. Our
          innovative approach ensures premium quality, supporting local jobs and
          delivering global excellence.
        </p>
      </div>
      <div className="xl:w-[1290px] w-full px-3 lg:px-0 h-[421px] md:h-[505px] lg:h-[705px]  m-auto  items-center flex">
        <div className="lg:w-[580px] w-full m-auto h-[421px] md:h-[505px] gap-2 flex">
          <div className="xl:w-[318px] w-2/3 lg:w-[289px]">
            <img
              src={image1}
              className="object-cover object-left h-full"
              alt=""
            />
          </div>
          <div className="lg:w-[221px] w-1/3">
            <img
              src={image1}
              className="object-cover object-right  h-full"
              alt=""
            />
          </div>
        </div>
        <div className="w-[709px] xl:pl-[70px] px-[30px] hidden md:block">
          <p className="font-allura text-[40px] text-[#FF3C14] leading-3  font-bold mb-5">
            Who we are?
          </p>
          <div className="font-lora text-[40px] lg:text-[48px] font-medium mb-5 leading-[50px]">
            <h1 className="elementor-heading-title elementor-size-default">
              Pioneering Ceylon's Premium Exports
            </h1>{" "}
          </div>
          <p className="font-karla text-base mb-5">
            Ceylonese Exports, based in Nittambuwa, Sri Lanka, specializes in
            exporting fresh King Coconuts with the unique Ceylon taste. Our
            innovative approach ensures premium quality, supporting local jobs
            and delivering global excellence.
          </p>
        </div>
      </div>
    </>
  );
};
