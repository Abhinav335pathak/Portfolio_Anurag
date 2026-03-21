import { useState, useRef } from "react";
import Button from "./Button";
import Section from "./Section";
import { heroImage } from "../assets";
// import Carousel from "./Carousel";
import Typewriter from "typewriter-effect";
import SectionSvg from "../assets/svg/SectionSvg";
import { pattern_bg } from "../assets";
// import { hero_banners } from "../constants";
import { v4 as uuidv4 } from 'uuid';
import "../../src/index.css";

const Hero = () => {
  const parallaxRef = useRef(null);

  const handleSlideChange = (index) => {
    console.log(`Slide changed to index ${index}`);
  };

  return (
  <Section
    className="pt-[5rem] -mt-[5.25rem]"
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
  >
    <div
      className="container relative flex flex-col lg:flex-row justify-between items-center "
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${pattern_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="relative z-1 max-w-[62rem] mx-auto text-center lg:text-left my-4 lg:my-0">
        <h1 className="h1 mb-4 lg:mb-2 text-3xl md:text-6xl">
          Anurag Shrivastav
          <br />
          <span style={{ color: "#FF7D1A" }}>
            <Typewriter
              options={{
                strings: ["Software Architect"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
              }}
            />
          </span>
        </h1>

        <p className="body-1 text-wrap text-n-2 lg:mb-6 text-lg md:text-lg mt-4 mb-6">
          Transforming Complex Ideas into Fluid Digital Realities.
          <br />
          
          Crafting Intuitive Android Solutions for the Modern On-Demand Economy
        </p>

        <Button className="md:mt-3 lg:mt-0 text-base" href="#readyToUse" white>
          Get Started
        </Button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-[60%] lg:w-[40%] mt-6 lg:mt-0 mb-8">
        <img src={heroImage} className="w-full h-auto" alt="Hero" />
      </div>
    </div>
  </Section>
);
};

export default Hero;