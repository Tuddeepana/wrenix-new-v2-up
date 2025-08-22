import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="flex flex-col justify-center items-center w-[80vw] m-auto min-h-screen">
        <h2 className="text-[4rem] md:text-[6.25rem] font-[500] text-wrenixGray leading-none text-center">
          We don<span className="text-wrenixYellow">&apos;</span>t<br /> just
          think.
          <br />
          <span className="text-wrenixBlue">We do.</span>
        </h2>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <video className="bg-transparent" autoPlay loop muted playsInline>
          <source src="animation/scrollDownAnimation.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
