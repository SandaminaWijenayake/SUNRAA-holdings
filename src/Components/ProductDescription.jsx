import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export const ProductDescription = () => {
  return (
    <div className="max-w-[1290px]  m-auto py-20  px-2">
      <div className="text-[40px] font-allura text-center    text-[#FF3C14] font-bold">
        Product Description
      </div>
      <h1 className="font-lora md:text-5xl text-3xl text-center font-semibold">
        Discover the Essence of Pure Refreshment
      </h1>
      <div className="grid md:grid-cols-2 mt-[80px] gap-5 ">
        <div className="md:flex md:max-w-[510px]">
          <div className="min-w-[89px]">
            <WorkspacePremiumIcon
              sx={{
                fontSize: "70px",
                border: "solid #FF3E41",
                color: "#FF3E41",
              }}
            />
          </div>
          <div className="">
            <h1 className="text-[26px] h-[54px] flex items-center  my-2 font-robotoSlab">
              Freshness Guaranteed
            </h1>
            <div className="md:max-w-[421px] text-base font-karla text-justify">
              Our Young King Coconuts boast a circumference of over 15.5 inches.
              Each is carefully wrapped in cling film to preserve freshness and
              packaged in sturdy corrugated boxes. Each box contains 6 nuts,
              ensuring they arrive in perfect condition, ready to satisfy your
              craving for fresh, just-picked excellence.
            </div>
          </div>
        </div>
        <div className="md:flex md:max-w-[510px] md:mt-[76px]">
          <div className="min-w-[89px]">
            <WorkspacePremiumIcon
              sx={{
                fontSize: "70px",
                border: "solid #FF3E41",
                color: "#FF3E41",
              }}
            />
          </div>
          <div className="">
            <h1 className="text-[26px] h-[54px] flex items-center my-2 font-robotoSlab ">
              Tropical Flavor
            </h1>
            <div className="md:max-w-[421px] text-base font-karla text-justify">
              Discover the culinary versatility of our Young King Coconuts, with
              tender flesh perfect for savory and sweet dishes. Add a tropical
              twist to salads, desserts, curries, or smoothies. Our handpicked
              coconuts bring fresh flavor and creamy texture to every bite.
              Indulge in paradise with our premium selection, elevating your
              cooking to new heights of deliciousness.
            </div>
          </div>
        </div>
        <div className="md:flex md:max-w-[510px]">
          <div className="min-w-[89px]">
            <WorkspacePremiumIcon
              sx={{
                fontSize: "70px",
                border: "solid #FF3E41",
                color: "#FF3E41",
              }}
            />
          </div>
          <div className="">
            <h1 className="text-[26px] h-[54px] flex items-center my-2 font-robotoSlab">
              Optimal Hydration
            </h1>
            <div className="md:max-w-[421px] text-base font-karla text-justify">
              Our King Coconuts are perfect for hydration and fluid balance.
              Packed with antioxidants, they combat oxidative stress and
              inflammation. Their natural sugars provide quick energy, ideal for
              athletes. With low calories and fat, they're great for weight and
              health-conscious individuals. Incorporate King Coconuts into your
              diet for overall well-being and a healthy lifestyle.
            </div>
          </div>
        </div>
        <div className="md:flex md:max-w-[510px] md:mt-[76px]">
          <div className="min-w-[89px]">
            <WorkspacePremiumIcon
              sx={{
                fontSize: "70px",
                border: "solid #FF3E41",
                color: "#FF3E41",
              }}
            />
          </div>
          <div className="">
            <h1 className="text-[26px] h-[54px] flex items-center my-2 font-robotoSlab">
              Quality Assurance
            </h1>
            <div className="md:max-w-[421px] text-base font-karla text-justify">
              Our export-quality King Coconut products are meticulously
              inspected to ensure they are free from pests like mites, beetles,
              and caterpillars, as well as diseases such as fungal infections
              and bud rot. We maintain the health and quality of our King
              Coconut palms with great care, delivering pristine products to our
              customers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
