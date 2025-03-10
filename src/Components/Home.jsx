import React from "react";
import { Hero } from "./Hero";
import { IntroCards } from "./IntroCards";
import { Quote } from "./Quote";

export const Home = () => {
  return (
    <div>
      <Hero />
      <IntroCards />
      <Quote />
    </div>
  );
};
