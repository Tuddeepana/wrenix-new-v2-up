"use client";

import React from "react";
import Lottie from "lottie-react";

// Importing the animations
import DigitalMarketing from "../../../../public/animation/DigitalMarketing.json";
import GraphicDesign from "../../../../public/animation/GraphicDesigning.json";
import MobileDevelopment from "../../../../public/animation/MobileDevelopment.json";
import WebDesign from "../../../../public/animation/UIUX.json";
import WebDevelopment from "../../../../public/animation/WebDevelopment.json";

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero min-h-screen py-10 md:py-[5rem] flex flex-col justify-between px-4 md:px-6 relative">
      <div className="text-center mb-10 md:mb-16 mt-8 md:mt-16">
        <h2 className="text-wrenixGray text-[2.5rem] md:text-[4rem] lg:text-[6.5rem] font-[500] leading-tight md:leading-[1.1]">
          Your All-in-One. <br /> 
          <span className="text-wrenixBlue">Web </span>
          <span className="text-wrenixYellow">Partner</span> <br />
          <span className="text-[2.2rem] md:text-[3.5rem] lg:text-[6rem] italic">Forever.</span>
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row flex-wrap items-center md:items-end justify-center gap-6 md:gap-4 w-full">
        {/* Mobile Application Development */}
        <div className="flex w-full sm:w-[80%] md:w-[16rem] h-auto md:h-[28rem] py-5 px-3 flex-col justify-end gap-4 md:gap-10 items-center rounded-[0.625rem] bg-white shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <Lottie
            animationData={MobileDevelopment}
            loop={true}
            className="w-full max-w-[15rem] md:w-64 md:h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.2rem] md:text-[1.5rem] font-[500] text-center">
            Mobile Application Development
          </h6>
        </div>
        
        {/* UI/UX Design */}
        <div className="flex w-full sm:w-[80%] md:w-[18rem] h-auto md:h-[24rem] py-5 px-3 flex-col justify-between items-center rounded-[0.625rem] bg-white shadow-[-2px_2px_4px_0px_rgba(0,0,0,0.25)]">
          <Lottie
            animationData={WebDesign}
            loop={true}
            className="w-full max-w-[15rem] md:w-64 md:h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.2rem] md:text-[1.5rem] font-[500] text-center">
            UI/UX Design
          </h6>
        </div>
        
        {/* Web Design & Development */}
        <div className="flex w-full sm:w-[80%] md:w-[25rem] h-auto md:h-[20rem] py-5 px-3 flex-col justify-end items-center rounded-[0.625rem] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <Lottie
            animationData={WebDevelopment}
            loop={true}
            className="w-full max-w-[15rem] md:w-64 md:h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.2rem] md:text-[1.5rem] font-[500] text-center">
            Web Design & Development
          </h6>
        </div>
        
        {/* Digital Marketing */}
        <div className="flex w-full sm:w-[80%] md:w-[18rem] h-auto md:h-[24rem] py-5 px-3 flex-col justify-between items-center rounded-[0.625rem] bg-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)]">
          <Lottie
            animationData={DigitalMarketing}
            loop={true}
            className="w-full max-w-[15rem] md:w-64 md:h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.2rem] md:text-[1.5rem] font-[500] text-center">
            Digital Marketing
          </h6>
        </div>
        
        {/* Graphic Designing */}
        <div className="flex w-full sm:w-[80%] md:w-[16rem] h-auto md:h-[28rem] py-5 px-3 flex-col gap-4 md:gap-10 justify-end items-center rounded-[0.625rem] bg-white shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <Lottie
            animationData={GraphicDesign}
            loop={true}
            className="w-full max-w-[15rem] md:w-64 md:h-64"
          />
          <h6 className="text-wrenixDarkBlue text-[1.2rem] md:text-[1.5rem] font-[500] text-center">
            Graphic Designing
          </h6>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;