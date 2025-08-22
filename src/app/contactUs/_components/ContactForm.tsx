"use client";

import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
}

function InputField({ label, name, type = "text" }: InputFieldProps) {
  return (
    <div className="w-[46%]">
      <p className="text-[#100e34] text-[1.25rem] font-[500] self-stretch">
        {label}
      </p>
      <input
        name={name}
        type={type}
        required
        className="w-full rounded-[1.25rem] px-3 py-1 border border-wrenixGray bg-white"
      />
    </div>
  );
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const sendWhatsAppMessage = (data: Record<string, string>) => {
    const whatsAppMessage = `
    Hello! 
I am ${data.firstName} ${data.lastName} and I would like to get in touch with you. 
- My email: ${data.email}
- My phone number: ${data.phoneNumber}. 

Here is my message: 
    "${data.message}"
    `;

    const encodedMessage = encodeURIComponent(whatsAppMessage);
    const phoneNumber = "+94775105532";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setFormData(data as Record<string, string>);
    sendWhatsAppMessage(data as Record<string, string>);
    
    // console.log("Form Data: ", data);

  };

  return (
    <div className="flex w-full p-[3rem] px-[2rem] flex-col items-start gap-[2.5rem] rounded-[2rem] bg-white">
      <div>
        <h3 className="text-[#100e34] text-[2rem] font-medium leading-none">
          Send Us a <span className="text-wrenixYellow">message</span>
        </h3>
        <p className="text-[#100e34] text-[1.25rem] font-[500]">
          Do you need our help, Do not hesitate to contact us.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full justify-between items-start gap-[1rem] flex-wrap"
      >
        <InputField label="First Name" name="firstName" />
        <InputField label="Last Name" name="lastName" />
        <InputField label="Email" name="email" type="email" />
        <InputField label="Phone Number" name="phoneNumber" type="tel" />
        <div className="w-full">
            <p className="text-[#100e34] text-[1.25rem] font-[500] self-stretch">Message</p>
            <textarea name="message" className="w-full resize-none border border-wrenixGray rounded-[1.25rem] pl-4 pr-2 pt-4 pb-2 h-[10rem]"></textarea>
        </div>
        <button
            type="submit"
            className="w-full bg-wrenixBlue text-white text-[1.25rem] font-[500] py-2 rounded-[1.25rem] mt-4 hover:bg-[#100e34]"
        >
            Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
