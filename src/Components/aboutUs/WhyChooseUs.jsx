import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export const WhyChooseUs = () => {
  return (
    <>
      <div className="xl:w-[1290px] w-full  lg:px-0 pb-[120px]  m-auto  items-center xl:flex">
        <div className="px-3 xl:w-[580px]">
          <p className="font-allura text-[40px] text-[#FF3C14] leading-3  font-bold mb-5">
            Why choose us?
          </p>
          <div className="font-lora text-[40px] lg:text-[48px] font-medium mb-5 leading-[50px]">
            <h1 className="elementor-heading-title elementor-size-default">
              Experience Excellence, Taste the Difference
            </h1>{" "}
          </div>
          <div className="text-justify">
            <p className="font-karla text-base mb-5">
              Experience the royal treatment with Ceylonese Exports' King
              Coconuts. With an unwavering commitment to quality, we bring you
              the finest King Coconuts from the lush landscapes of Sri Lanka.
              Our expertise in selecting and harvesting these premium coconuts
              ensures that every sip you take is a taste of pure luxury,
              embodying the rich heritage and natural abundance of our homeland.
              From farm to your table, we guarantee an unparalleled refreshment
              experience that is both authentic and exceptional.
            </p>
            <p>
              At Ceylonese Exports, we pride ourselves on transparency and
              innovative packaging that preserves the freshness and purity of
              our King Coconuts. Our dedication to excellence means that you can
              trust in the integrity of our products, knowing that each coconut
              is meticulously chosen and prepared to deliver maximum flavor and
              nutrition. Let us redefine your refreshment experience, offering
              you not just a product, but a journey into the heart of Sri Lankan
              tradition and tropical splendor.
            </p>
          </div>
        </div>
        <div className="xl:w-[626px] w-full md:w-11/12 m-auto  gap-2 flex">
          <div className="max-w-[1290px] m-auto">
            <div className="grid md:grid-cols-2 mt-[50px] gap-1 ">
              <div className="md:flex md:max-w-[510px] text-center md:text-left">
                <div className="min-w-[89px] text-center">
                  <ThumbUpIcon
                    sx={{
                      fontSize: "30px",
                      border: "solid  #FF3E41",
                      color: "#FF3E41",
                      padding: "5px",
                      boxSizing: "content-box",
                    }}
                  />
                </div>
                <div className="">
                  <h1 className="text-2xl  flex justify-center  md:justify-start items-center  my-2 font-robotoSlab">
                    Food Trading Expertise
                  </h1>
                  <div className="md:max-w-[421px] text-center md:text-left text-sm font-karla ">
                    Decades in food industry, your top choice for trading.
                  </div>
                </div>
              </div>
              <div className="md:flex md:max-w-[510px] text-center md:text-left  pt-5 md:mt-[90px]">
                <div className="min-w-[89px] text-center">
                  <HandshakeIcon
                    sx={{
                      fontSize: "30px",
                      border: "solid  #FF3E41",
                      color: "#FF3E41",
                      padding: "5px",
                      boxSizing: "content-box",
                    }}
                  />
                </div>
                <div className="">
                  <h1 className="text-2xl  flex justify-center md:justify-start items-center  my-2  font-robotoSlab">
                    Trust in Excellence
                  </h1>
                  <div className="md:max-w-[421px] text-center md:text-left text-sm font-karla ">
                    Trusted & Legally Approved Certified Services
                  </div>
                </div>
              </div>
              <div className="md:flex md:max-w-[510px] text-center md:text-left pt-5 ">
                <div className="min-w-[89px] text-center">
                  <StarIcon
                    sx={{
                      fontSize: "30px",
                      border: "solid  #FF3E41",
                      color: "#FF3E41",
                      padding: "5px",
                      boxSizing: "content-box",
                    }}
                  />
                </div>
                <div className="">
                  <h1 className="text-2xl  flex justify-center md:justify-start items-center   my-2 font-robotoSlab">
                    Premium Services
                  </h1>
                  <div className="md:max-w-[421px] text-center md:text-left text-sm font-karla ">
                    Delivering top-quality services for healthy, fresh food.
                  </div>
                </div>
              </div>
              <div className="md:flex md:max-w-[510px] text-center md:text-left pt-5 md:mt-[90px]">
                <div className="min-w-[89px] text-center">
                  <AccessTimeFilledIcon
                    sx={{
                      fontSize: "30px",
                      border: "solid  #FF3E41",
                      color: "#FF3E41",
                      padding: "5px",
                      boxSizing: "content-box",
                    }}
                  />
                </div>
                <div className="">
                  <h1 className="text-2xl  flex justify-center md:justify-start items-center  my-2 font-robotoSlab">
                    Time commitment
                  </h1>
                  <div className="md:max-w-[421px] text-center md:text-left text-sm font-karla ">
                    Punctuality and commitment to deadlines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
