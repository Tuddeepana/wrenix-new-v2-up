"use client";

import type React from "react";

import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaFileAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
// import { FaP } from "react-icons/fa6"

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <Card className="group relative overflow-hidden transition-all hover:shadow-lg cursor-pointer ">
        <a href="/services" className="block">
          <CardContent className="p-6">
            <div className="mb-4 text-gray-600 group-hover:text-wrenixBlue transition-colors">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4">{description}</p>
            <motion.div
              className="inline-flex items-center text-sm font-medium text-indigo-500 hover:text-wrenixBlue"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Learn more
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.div>

            {/* Animated border on hover */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-wrenixBlue"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </CardContent>
        </a>
      </Card>
    </motion.div>
  );
};

const services = [
  {
    icon: <FaPaintBrush className="w-8 h-8" />,
    title: "Graphic Design",
    description:
      "Our support team will get assistance from AI-powered to services your need",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Apps Development",
    description:
      "Our support team will get assistance from AI-powered to services your need",
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Web Design & Development",
    description:
      "Our support team will get assistance from AI-powered to services your need",
  },
  {
    icon: <FaFileAlt className="w-8 h-8" />,
    title: "Content Creating and SEO",
    description:
      "Our support team will get assistance from AI-powered to services your need",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 md:px-32">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-[3.5rem] font-bold leading-tight text-wrenixDarkBlue">
              What Do You Need?
              <br />
              We Can Do it
            </h2>
            <motion.div
              className="h-1 w-24 bg-indigo-500 mt-6"
              initial={{ width: 0 }}
              animate={{ width: 250 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <p className="mt-6 text-lg text-muted-foreground">
              Orders with multiple SKUs can be entered manually, or imported
              into the Quick Order form. Quick Order can be used.
            </p>
          </motion.div>

          {/* Right Column - Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
