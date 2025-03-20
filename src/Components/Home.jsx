import React from "react";
import { Hero } from "./Hero";
import { IntroCards } from "./IntroCards";
import { Quote } from "./Quote";
import ProductHomePage from "./Products/ProductHomePage";
import ProductCard from "./Products/ProductCard";
import productData from "../Constants/productData";
import { SecondSection } from "./SecondSection";
import { ProductDescription } from "./ProductDescription";
import HomeImage from "./HomeImage";

export const Home = () => {
  return (
    <div>
      <Hero />
      <IntroCards />
      <Quote />
      <SecondSection />
      <ProductHomePage>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            hoverImage={product.hoverImage}
            name={product.name}
          />
        ))}
      </ProductHomePage>
      <ProductDescription />
      <HomeImage />
    </div>
  );
};
