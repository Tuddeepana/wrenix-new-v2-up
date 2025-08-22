"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

interface ProjectProps {
  number: string;
  title: string;
  description: string;
  category: string;
  features: string[];
  isReversed?: boolean;
}

const Project = ({
  number,
  title,
  description,
  category,
  features,
  isReversed = false,
}: ProjectProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-16 my-12 sm:my-16 md:my-20 lg:my-[8rem] relative ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Background gradient blob */}
      <div
        className={`absolute inset-0 -z-10 ${
          isReversed
            ? "bg-gradient-to-l from-blue-50/30 via-transparent to-yellow-50/20"
            : "bg-gradient-to-r from-blue-50/30 via-transparent to-yellow-50/20"
        } rounded-3xl blur-3xl transform scale-110`}
      />
      <motion.div
        variants={itemVariants}
        className={`relative text-transparent bg-gradient-to-br from-blue-600 to-yellow-400 bg-clip-text text-[100px] sm:text-[140px] md:text-[200px] font-black leading-none ${
          isReversed ? "md:text-right" : "md:text-left"
        } drop-shadow-sm`}
      >
        {number}
        {/* Decorative accent */}
        <div
          className={`absolute top-0 ${
            isReversed ? "left-0" : "right-0"
          } w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full animate-pulse`}
        />
      </motion.div>

      <div
        className={`flex-1 space-y-4 md:space-y-6 ${
          isReversed ? "md:text-right" : "md:text-left"
        }`}
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-700 text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full border border-blue-200/50"
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full animate-pulse" />
          {category}
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-gray-800 text-3xl sm:text-4xl md:text-[3.5rem] font-black mb-3 sm:mb-4 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          {description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className={`flex flex-wrap gap-3 pt-4 ${
            isReversed ? "md:justify-end" : "md:justify-start"
          } justify-center`}
        >
          {features.map((feature, index) => (
            <span
              key={index}
              className="group relative px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-300 hover:text-yellow-700 transition-all duration-300 cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">{feature}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const router = useRouter();

  const projects = [
    {
      number: "01",
      title: "E-Commerce Solutions",
      description:
        "Complete online shopping platforms with payment integration, inventory management, and user-friendly interfaces that drive sales and enhance customer experience.",
      category: "Web Development",
      features: [
        "Payment Integration",
        "Inventory Management",
        "User Dashboard",
        "Mobile Responsive",
      ],
      isReversed: false,
    },
    {
      number: "02",
      title: "Learning Management Systems",
      description:
        "Educational platforms with course management, student tracking, and interactive learning tools that transform the way education is delivered and consumed.",
      category: "EdTech",
      features: [
        "Course Management",
        "Student Tracking",
        "Interactive Tools",
        "Progress Analytics",
      ],
      isReversed: true,
    },
    {
      number: "03",
      title: "AI Chatbots",
      description:
        "Intelligent conversational systems for customer service, support, and automated interactions that provide 24/7 assistance and improve user engagement.",
      category: "Machine Learning",
      features: [
        "Natural Language Processing",
        "24/7 Support",
        "Multi-language",
        "Integration Ready",
      ],
      isReversed: false,
    },
    {
      number: "04",
      title: "Data Analysis Dashboards",
      description:
        "Interactive visualization tools for business intelligence and data-driven decision making that transform complex data into actionable insights.",
      category: "Data Science",
      features: [
        "Real-time Analytics",
        "Custom Visualizations",
        "Export Reports",
        "Multi-source Data",
      ],
      isReversed: true,
    },
    {
      number: "05",
      title: "ERP Systems",
      description:
        "Enterprise resource planning solutions for streamlined business operations and management that integrate all core business processes into one unified system.",
      category: "Enterprise",
      features: [
        "Resource Planning",
        "Process Automation",
        "Multi-department",
        "Scalable Architecture",
      ],
      isReversed: false,
    },
    {
      number: "06",
      title: "Automation Systems",
      description:
        "Process automation tools to improve efficiency and reduce manual work across various industries, enabling businesses to focus on strategic growth initiatives.",
      category: "Automation",
      features: [
        "Workflow Automation",
        "API Integration",
        "Custom Rules",
        "Performance Monitoring",
      ],
      isReversed: true,
    },
    {
      number: "07",
      title: "POS Systems",
      description:
        "Point of sale solutions for retail businesses with inventory tracking and sales analytics that streamline operations and provide valuable business insights.",
      category: "Retail",
      features: [
        "Sales Tracking",
        "Inventory Control",
        "Receipt Printing",
        "Analytics Dashboard",
      ],
      isReversed: false,
    },
    {
      number: "08",
      title: "SaaS Applications",
      description:
        "Cloud-based software solutions with scalable architecture and modern user experiences that adapt to growing business needs and provide seamless access from anywhere.",
      category: "Cloud Solutions",
      features: [
        "Cloud Infrastructure",
        "Scalable Design",
        "User Management",
        "Subscription Model",
      ],
      isReversed: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const handleGetStarted = () => {
    router.push('/contactUs');
  };

  return (
    <div className="min-h-screen bg-white py-16 md:py-20 lg:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16 md:mb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Our Amazing
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transforming ideas into digital reality through innovative solutions
            that drive growth and create exceptional user experiences.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              number={project.number}
              title={project.title}
              description={project.description}
              category={project.category}
              features={project.features}
              isReversed={project.isReversed}
            />
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-20 px-4"
      >
        <div className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-to-br from-blue-50 to-yellow-50 rounded-3xl border border-blue-100 shadow-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's collaborate to bring your vision to life with cutting-edge
            technology and innovative design.
          </p>
          <button
            onClick={handleGetStarted}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-yellow-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

