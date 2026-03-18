'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Headphones } from 'lucide-react'

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
      className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg border border-wrenixBlue/5"
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
        className="mb-4 p-4 rounded-full bg-wrenixYellow/20 text-wrenixYellow"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2 text-wrenixBlue">{title}</h3>
      <p className="text-wrenixDarkBlue/70">{description}</p>
    </motion.div>
  )
}

const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Result-driven strategies",
    description: "Our campaigns are focused on measurable ROI and tangible business growth."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Experienced professionals",
    description: "Work with digital marketing experts who have a proven track record of success."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Latest techniques",
    description: "We use modern marketing tools and stay ahead of the latest digital trends."
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Dedicated support",
    description: "Enjoy personalized consultation and ongoing support throughout your journey."
  }
]

export default function MarketingWhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-white/30 backdrop-blur-sm rounded-t-[4rem] border-t border-wrenixBlue/10 mx-4 md:mx-0">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-wrenixYellow font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-wrenixBlue">Our Strategic Edge ⭐</h2>
          <div className="h-1.5 w-32 bg-wrenixBlue mx-auto mt-6 rounded-full" />
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
