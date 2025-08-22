import React from "react";
import ContactForm from "./ContactForm";
import ContactDetail from "./ContactDetail";

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[70vw] mx-auto py-12 md:py-16 items-center justify-between gap-6 md:gap-8 lg:gap-10">
      <ContactForm />
      <ContactDetail />
    </div>
  );
};

export default ContactSection;