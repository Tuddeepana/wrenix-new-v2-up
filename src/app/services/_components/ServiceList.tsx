"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface ServiceProps {
  number: string
  title: string
  description: string
  isReversed?: boolean
}

const Service = ({ number, title, description, isReversed = false }: ServiceProps) => {
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

export default function ServicesList() {
  const services = [
    {
      number: "01",
      title: "Web Design & Development",
      description:
        "We create unique websites with exceptional UI/UX design to captivate audiences. Our services include e-commerce solutions, intuitive CMS, SEO optimization, and reliable hosting with proactive maintenance, delivering complete web design and development solutions.",
      isReversed: false,
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Our UI/UX design services create user-focused, visually striking, and intuitive interfaces that enhance engagement. From wire-frames to prototypes, we blend creativity with functionality to deliver seamless experiences that align with your brand and drive meaningful interactions.",
      isReversed: true,
    },
    {
      number: "03",
      title: "Digital Marketing",
      description:
        "Our digital marketing services boost your online presence and deliver results. We specialize in social media marketing, SEO, brand strategy, content marketing, and PPC advertising to engage audiences, improve visibility, and drive high-converting traffic. Together, we craft impactful strategies tailored to your business needs.",
      isReversed: false,
    },
    {
      number: "04",
      title: "Graphic Design",
      description:
        "Our graphic design services bring your brand to life with creative precision. From brand identity and logo design to packaging, illustrations, marketing materials, and social media graphics, we craft impactful designs that leave a lasting impression.",
      isReversed: true,
    },
    {
      number: "05",
      title: "Mobile Application Development",
      description:
        "We offer custom mobile app solutions with cross-platform development, responsive design, and user-centric interfaces. By integrating cutting-edge technologies, we create intuitive, future-ready apps and provide end-to-end support from concept to launch.",
      isReversed: false,
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
        {services.map((service, index) => (
          <Service
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