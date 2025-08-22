"use client";

import React from "react";
import CountItem from "./CountItem";

const CountComponent: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center px-4">
      <div className="w-full max-w-[80vw] flex flex-wrap justify-center px-4 md:px-[4rem] py-[1.5rem] gap-6 md:gap-[5rem] bg-wrenixDarkBlue rounded-[1.5rem] md:rounded-[2.5rem]">
        <CountItem count={50} label="Projects Completed" />
        <CountItem count={10} label="Team Members" />
        <CountItem count={4} label="Countries Served" />
        <CountItem count={15} label="happy Clients" />
      </div>
    </div>
  );
};

export default CountComponent;