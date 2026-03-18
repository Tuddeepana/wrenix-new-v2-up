"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MarketingLead: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white/50 backdrop-blur-sm rounded-3xl mx-4 sm:mx-8 lg:mx-16 my-16 border border-wrenixBlue/10">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[280px] md:max-w-[320px] aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-wrenixYellow/30 bg-wrenixBlue/5"
        >
          <Image 
            src="/dinidu.jpeg" 
            alt="Dinidu Kalpajee - Digital Marketing Expert" 
            fill 
            className="object-cover"
          />
        </motion.div>

        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-wrenixBlue mb-2">Dinidu Kalpajee</h2>
            <p className="text-xl text-wrenixYellow font-semibold uppercase tracking-wider">Digital Marketing Expert</p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-wrenixDarkBlue leading-relaxed"
          >
            Dinidu Kalpajee is a highly experienced digital marketing professional with proven success in the industry. As a young and dynamic leader, he combines creativity, innovation, and strategic thinking to help businesses grow rapidly and achieve top-level performance in the digital space. 
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MarketingLead;
