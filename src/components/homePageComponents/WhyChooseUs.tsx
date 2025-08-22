'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, Award } from 'lucide-react'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const Feature = ({ icon, title, description, index }: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="flex flex-col items-center text-center p-6"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: [0.21, 1.11, 0.81, 0.99]
        }}
        className="mb-4 p-3 rounded-full bg-indigo-100 text-indigo-500"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Reliable",
    description: "We prioritize security in every project, ensuring your data and users are always protected."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast & Optimized",
    description: "Our solutions are built for speed, with optimized code and efficient architecture."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client-Focused",
    description: "We listen to your needs and tailor our approach to meet your specific business goals."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Award-Winning",
    description: "Our work has been recognized for excellence in design, development, and user experience."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-[3rem] text-wrenixDarkBlue font-bold mb-4">Why Choose Us</h2>
          <motion.div
            className="h-1 w-24 bg-wrenixYellow mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 250 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-muted-foreground">
            We combine technical expertise with creative excellence to deliver exceptional digital solutions that drive results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
