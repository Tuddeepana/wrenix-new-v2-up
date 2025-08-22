import React from "react";
import ServicesList from "./ServiceList";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen flex gap-4 sm:gap-6 md:gap-[3rem] py-8 md:py-12 lg:pb-[5rem] w-full px-4 sm:px-6 md:px-8 lg:px-16 m-auto justify-center items-center flex-col">
      <ServicesList />
    </div>
  );
};

export default Services;