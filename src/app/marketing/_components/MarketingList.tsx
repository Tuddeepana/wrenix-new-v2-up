"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface MarketingServiceProps {
  number: string
  title: string
  description: string
  isReversed?: boolean
}

const MarketingService = ({ number, title, description, isReversed = false }: MarketingServiceProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-12 my-8 sm:my-12 md:my-16 lg:my-[10rem] ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        variants={itemVariants}
        className={`text-amber-400 text-[80px] sm:text-[120px] md:text-[180px] font-bold leading-none ${
          isReversed ? "md:text-right" : "md:text-left"
        }`}
      >
        {number}
      </motion.div>
      <div className={`flex-1 ${isReversed ? "md:text-right" : "md:text-left"}`}>
        <motion.h2 variants={itemVariants} className="text-wrenixBlue text-2xl sm:text-3xl md:text-[3rem] font-bold mb-2 sm:mb-4">
          {title}
        </motion.h2>
        <motion.p variants={itemVariants} className="text-wrenixDarkBlue mx-auto w-full text-sm sm:text-base md:text-[1.2rem] md:mx-0">
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default function MarketingList() {
  const marketingServices = [
    {
      number: "01",
      title: "Search Engine Optimization (SEO)",
      description:
        "Rank your website on top of Google search results and increase your organic visibility with our data-driven SEO strategies, focusing on keyword research, technical optimization, and high-quality content.",
      isReversed: false,
    },
    {
      number: "02",
      title: "Facebook Marketing Campaigns",
      description:
        "Targeted ads to reach the right audience. We build your brand presence with engaging content, strategic posting, and community management to foster real connections.",
      isReversed: true,
    },
    {
      number: "03",
      title: "YouTube Marketing",
      description:
        "Video promotions to boost brand awareness. We create value-driven content that educates, entertains, and converts your audience through the power of video marketing.",
      isReversed: false,
    },
    {
      number: "04",
      title: "TikTok Marketing",
      description:
        "Viral campaigns for maximum engagement. Leverage the latest trends and short-form video content to capture the attention of a younger, dynamic audience.",
      isReversed: true,
    },
    {
      number: "05",
      title: "Google Business Optimization & Analytics",
      description:
        "Improve local visibility and performance tracking. We ensure your business is easily found by local customers and provide clear insights through detailed analytics.",
      isReversed: false,
    },
    {
      number: "06",
      title: "Booking.com Setup for Hotels",
      description:
        "Complete listing creation and optimization to increase reservations. We help hotels and guest houses manage their online presence and maximize their booking potential.",
      isReversed: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        {marketingServices.map((service, index) => (
          <MarketingService
            key={index}
            number={service.number}
            title={service.title}
            description={service.description}
            isReversed={service.isReversed}
          />
        ))}
      </motion.div>
    </div>
  )
}
