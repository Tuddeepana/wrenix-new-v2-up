"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
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

      <div
        className={`flex-1 space-y-4 md:space-y-6 ${
          isReversed ? "md:text-right" : "md:text-left"
        }`}
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-yellow-100 text-wrenixBlue text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full border border-blue-200/50"
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full animate-pulse" />
          {category}
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-wrenixBlue text-2xl sm:text-3xl md:text-[3rem] font-bold mb-2 sm:mb-4 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-wrenixDarkBlue mx-auto w-full text-sm sm:text-base md:text-[1.2rem] md:mx-0"
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
              className="group relative px-4 py-2 bg-white text-wrenixDarkBlue text-sm font-medium rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-300 hover:text-yellow-700 transition-all duration-300 cursor-default"
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

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = document.getElementById('projects-hero-canvas') as HTMLCanvasElement | null;
    if (!canvas) {
      throw new Error('Projects hero canvas element not found');
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

  // Create particles (reduced for subtler background)
  const particlesArray: Particle[] = [];
  const numberOfParticles = Math.min(30, Math.floor(canvas.width / 50));

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        const { width, height } = canvas!;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
  // smaller, slower, and more transparent particles for a lighter effect
  this.size = Math.random() * 2 + 0.8;
  this.speedX = Math.random() * 1 - 0.5;
  this.speedY = Math.random() * 1 - 0.5;
  this.color = `rgba(94, 96, 206, ${Math.random() * 0.25})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    init();

    const connectParticles = () => {
      if (!ctx) return;

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            const opacity = 1 - distance / 60;
            // lighter connection lines
            ctx.strokeStyle = `rgba(94, 96, 206, ${opacity * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

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
    <div className="min-h-screen bg-transparent py-16 md:py-20 lg:py-24">
      {/* Hero Section */}
      <div className="flex justify-center items-center mb-16 md:mb-20 min-h-[60vh] md:min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex flex-col justify-center items-center"
        >
          <canvas ref={canvasRef} id="projects-hero-canvas" className="absolute inset-0 w-full h-full" />

          {/* subtle overlay to improve contrast over the canvas */}
          <div className="absolute inset-0 bg-white/60 pointer-events-none" />

          <div className="relative z-10 text-center px-4 py-8 md:py-12 w-full">
            <h2 className="inline-block mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-[5.5rem] font-[600] text-center text-wrenixGray max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mb-4 tracking-tight leading-tight">
              <span className="whitespace-nowrap">Transformative <span className="text-wrenixYellow">Digital</span></span>
                <span className="text-wrenixBlue block mt-6 md:mt-8">Projects</span>
            </h2>

           

            <div className="mt-4 w-28 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 mx-auto rounded-full" />
          </div>
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

