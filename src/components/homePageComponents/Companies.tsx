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
import newLogo from "../Wrenix Trust Company/WhatsApp Image 2025-08-31 at 14.41.43.jpeg";
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
  newLogo,
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
          <div className="w-[90vw] md:w-[85vw] lg:w-[70vw] mx-auto">
            <div className="flex items-center justify-between gap-6 md:gap-10 flex-wrap">
              {logos.map((SrcImage, idx) => (
                <div
                  key={idx}
                  className="flex-1 min-w-[120px] max-w-[160px] flex justify-center items-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                >
                  <Image src={SrcImage} alt={`brand-${idx}`} width={160} height={60} style={{ objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
