"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaPencilAlt, FaCog, FaTruck } from "react-icons/fa"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[2rem]">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.3,
                ease: "easeOut",
              }}
              className="p-3 md:p-4 text-2xl md:text-[3rem] font-bold flex items-center justify-center rounded-full bg-amber-100 text-amber-400 shrink-0"
            >
              {icon}
            </motion.div>
            <div>
              <motion.h3
                className="text-2xl md:text-3xl lg:text-[3rem] font-semibold mb-1 md:mb-2 text-wrenixBlue"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.4,
                }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-sm md:text-base text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.5,
                }}
              >
                {description}
              </motion.p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const services = [
  {
    icon: <FaPencilAlt className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />,
    title: "We Design",
    description: "Stunning, Modern web solutions that capture attention and convert visitors to clients.",
  },
  {
    icon: <FaCog className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />,
    title: "We Develop",
    description: "Secure, High-Performance web solutions built for speed and reliability.",
  },
  {
    icon: <FaTruck className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />,
    title: "We Deliver",
    description: "On time, Every time, Ensuring your project launches smoothly and flawlessly.",
  },
]

export default function WrenixIntro() {
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    }),
  }

  return (
    <section className="py-10 md:py-16 lg:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Heading */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center lg:text-left font-bold leading-tight"
            >
              <div className="flex flex-wrap justify-center lg:justify-start items-baseline gap-x-2 md:gap-x-4">
                <motion.span custom={0} variants={letterAnimation} className="text-4xl sm:text-6xl md:text-7xl lg:text-[9rem] text-wrenixGray">
                  We
                </motion.span>
                <motion.span custom={1} variants={letterAnimation} className="text-4xl sm:text-6xl md:text-7xl lg:text-[9rem] text-wrenixGray">
                  are
                </motion.span>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start items-baseline">
                <motion.span custom={2} variants={letterAnimation} className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-wrenixBlue">
                  Wreni
                </motion.span>
                <motion.span custom={3} variants={letterAnimation} className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-wrenixYellow">
                  x
                </motion.span>
                <motion.span custom={4} variants={letterAnimation} className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-wrenixYellow">
                  ,
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              className="h-1 bg-wrenixBlue mt-4 md:mt-6 mx-auto lg:mx-0"
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.21, 1.11, 0.81, 0.99],
              }}
            />
          </div>

          {/* Right Column - Service Cards */}
          <div className="space-y-4 md:space-y-6 mt-8 lg:mt-0">
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
  )
}