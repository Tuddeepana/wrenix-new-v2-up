"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import elephatEy from "@/components/Wrenix Trust Company/elephat ey.png";
import caffeineCoders from "@/components/Wrenix Trust Company/CaffeineCoders.jpg";
import freshpick from "@/components/Wrenix Trust Company/freshpick.png";

const marketingLogos = [
  elephatEy,
  caffeineCoders,
  freshpick,
];

const MarketingCompanies: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gray-50/50 backdrop-blur-sm shadow-inner overflow-hidden border-y border-wrenixBlue/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-wrenixBlue mb-4">
            🤝 Companies We Work With
          </h3>
          <p className="text-xl text-wrenixDarkBlue/70 max-w-2xl mx-auto">
            We proudly collaborate with leading brands and businesses, delivering high-quality marketing solutions that drive real results.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            {marketingLogos.map((SrcImage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-wrenixBlue/5 overflow-hidden p-4"
              >
                <Image 
                  src={SrcImage} 
                  alt={`Partner Brand ${idx + 1}`}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingCompanies;
