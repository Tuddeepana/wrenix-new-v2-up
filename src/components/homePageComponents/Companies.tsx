import React from "react";
import Image from "next/image";

import elephatEy from "../Wrenix Trust Company/elephat ey.png";
import euroAsia from "../Wrenix Trust Company/Euro Asia.webp";
import mediTools from "../Wrenix Trust Company/Medi tools.jpg";
import muth from "../Wrenix Trust Company/muth.png";
import olympus from "../Wrenix Trust Company/Olympus.jpg";
import takemelk from "../Wrenix Trust Company/Takemelk.webp";
import tissaFitness from "../Wrenix Trust Company/TissaFitness center.jpeg";
import caffeineCoders from "../Wrenix Trust Company/CaffeineCoders.jpg";
import eeeLogo from "../Wrenix Trust Company/WhatsApp Image 2025-08-28 at 19.37.10.jpeg";

import freshpick from "../Wrenix Trust Company/freshpick.png";

const logos = [
  elephatEy,
  euroAsia,
  mediTools,
  muth,
  olympus,
  takemelk,
  tissaFitness,
  caffeineCoders,
  eeeLogo,
 
  freshpick,
];

const Companies: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-base text-gray-500">Brands we&apos;ve</p>
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
            digitally transformed
          </h3>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full overflow-hidden">
            <div className="flex items-center gap-8 animate-scroll">
              {/* First set of logos */}
              {logos.map((SrcImage, idx) => {
                const isLargeLogo = SrcImage === caffeineCoders || SrcImage === eeeLogo;
                return (
                  <div
                    key={`first-${idx}`}
                    className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 flex items-center justify-center ${
                      SrcImage === tissaFitness ? 'bg-black' : 'bg-white'
                    }`}
                  >
                    <Image 
                      src={SrcImage} 
                      alt={`brand-${idx}`} 
                      width={isLargeLogo ? 140 : 89} 
                      height={isLargeLogo ? 140 : 89} 
                      className={isLargeLogo ? "w-full h-full object-cover rounded-full" : "w-16 h-16 md:w-24 md:h-24 object-contain"} 
                    />
                  </div>
                );
              })}
              {/* Duplicate set for seamless loop */}
              {logos.map((SrcImage, idx) => {
                const isLargeLogo = SrcImage === caffeineCoders || SrcImage === eeeLogo;
                return (
                  <div
                    key={`second-${idx}`}
                    className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 flex items-center justify-center ${
                      SrcImage === tissaFitness ? 'bg-black' : 'bg-white'
                    }`}
                  >
                    <Image 
                      src={SrcImage} 
                      alt={`brand-${idx}`} 
                      width={isLargeLogo ? 140 : 80} 
                      height={isLargeLogo ? 140 : 80} 
                      className={isLargeLogo ? "w-full h-full object-cover rounded-full" : "w-16 h-16 md:w-24 md:h-24 object-contain"} 
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
