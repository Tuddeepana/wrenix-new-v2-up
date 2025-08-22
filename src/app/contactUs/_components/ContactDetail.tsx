import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";

interface ContactCardProps {
  title: string;
  data: string;
  icon: React.ReactNode;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex justify-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
      p-[0.5rem] h-fit text-[1.3rem] rounded-full transition-all duration-300
      hover:bg-wrenixYellow hover:text-[#100E34] hover:scale-110"
    >
      {icon}
    </Link>
  );
};

const ContactCard: React.FC<ContactCardProps> = ({ title, data, icon }) => {
  return (
    <div className="flex p-[1rem] justify-start items-center w-full md:w-[90%] lg:w-[80%]
    bg-[#415877] rounded-[0.625rem] gap-[1.5rem] transition-all hover:bg-[#4e6a91]">
      <div className="text-white text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">{icon}</div>
      <div>
        <h4 className="text-white text-[1.25rem] md:text-[1.5rem] font-medium">{title}</h4>
        <p className="text-white text-[0.875rem] md:text-[1rem]">{data}</p>
      </div>
    </div>
  );
};

const ContactDetail: React.FC = () => {
  return (
    <div className="flex w-full lg:w-[45vw] p-[1.5rem] md:p-[2rem] lg:p-[3rem]
    flex-col items-center gap-[1.25rem] rounded-[1.8rem] bg-[#100E34]">
      <h3 className="text-white text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-medium leading-tight text-center lg:text-left">
        <span className="text-wrenixYellow">Hi!</span> We are always here to
        <br />
        <span className="text-wrenixYellow">help</span> you.
      </h3>

      <ContactCard
        title="Call Us"
        data="+94 77 510 5532"
        icon={<FaPhoneSquareAlt />}
      />
      <ContactCard
        title="WhatsApp"
        data="+94 77 510 5532"
        icon={<FaSquareWhatsapp />}
      />
      <ContactCard
        title="Email"
        data="hello@wrenix.com"
        icon={<MdEmail />}
      />

      <div className="bg-white h-[1px] w-full my-2" />

      <p className="text-white text-[1rem] font-medium">Connect with us</p>

      <div className="flex justify-between w-full max-w-[300px]">
        <SocialLink href="https://www.facebook.com" icon={<FaFacebook />} label="Facebook" />
        <SocialLink href="https://www.instagram.com" icon={<FaInstagram />} label="Instagram" />
        <SocialLink href="https://www.linkedin.com" icon={<FaLinkedin />} label="LinkedIn" />
        <SocialLink href="https://www.youtube.com" icon={<FaYoutube />} label="YouTube" />
        <SocialLink href="https://www.tiktok.com" icon={<FaTiktok />} label="TikTok" />
      </div>
    </div>
  );
};

export default ContactDetail;