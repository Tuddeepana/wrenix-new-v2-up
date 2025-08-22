"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including web design, web development, mobile app development, UI/UX design, graphic design, digital marketing, and content creation. Our team specializes in creating custom solutions tailored to your specific business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific requirements.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we provide comprehensive post-launch support and maintenance services. We offer various support packages that include regular updates, security monitoring, performance optimization, and content updates to ensure your digital product continues to perform optimally.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We believe in transparent and regular communication. Depending on your preference, we set up weekly or bi-weekly progress meetings, provide access to our project management tools, and assign a dedicated project manager who serves as your main point of contact throughout the development process.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based and depends on the scope, complexity, and timeline. We provide detailed quotes after understanding your requirements through an initial consultation. We also offer flexible payment schedules, typically with an initial deposit and milestone-based payments.",
  },
  {
    question: "Can you work with existing systems or designs?",
    answer:
      "Absolutely. We have extensive experience integrating with existing systems and working with established design guidelines. Whether you need to enhance an existing website, integrate with your CRM, or maintain brand consistency, our team can adapt to your current infrastructure and requirements.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <motion.div
            className="h-1 w-24 bg-indigo-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, process, and approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

