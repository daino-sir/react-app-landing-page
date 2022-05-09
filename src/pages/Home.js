import React from "react";
import Carousel from "../components/Carousel/Carousel";
import { Content } from "../components/Content/Content";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";
import { stepOne, stepTwo, stepThree } from "../data/AboutData";
import { Section, Heading } from "../globalStyles";
import { ContentTwo } from "../components/Content/ContentTwo";

// Hero Feature Content Carousel

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Section>
        <Heading>How to Get Started On Presta Sign</Heading>
      </Section>
      <Content {...stepOne} />
      <Content {...stepTwo} />
      <Content {...stepThree} />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
};

export default Home;
