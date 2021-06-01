import React from "react";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import Pricing from "./Pricing/";
import Process from "./Process";
import Projects from "./Projects";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Projects />
      <Services />
      <Process />
      <Banner />
      <Pricing />
    </>
  );
};

export default Home;
