import Link from "next/link";
import Image from "next/image";

import { IoLanguage } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

import Logo from "/public/logo/wrenix_logo.png";
import FooterIcon from "@/components/util/FooterIcon";

export default function Footer() {
  return (
    <footer
      className="w-full pt-6 pb-4 px-4 sm:px-6 md:px-8 lg:px-[3rem] transition-all duration-300 rounded-t-lg sm:rounded-t-xl md:rounded-t-[2rem] bg-[#d5d4e7]"
    >
      {/* Top section - stacked on mobile, row on larger screens */}
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6 mb-6 md:mb-4">
        <div className="cursor-default flex items-center space-x-2 bg-white border rounded-full px-3 py-1 sm:px-4 sm:py-2">
          <IoLanguage className="text-xl sm:text-2xl" />
          <span className="text-base sm:text-lg">English</span>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center">
          <Image src={Logo} alt="Wrenix Logo" width={250} height={300}
                 className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-auto" />
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:space-x-6 text-xs sm:text-sm font-inter">
            <Link
              href="/about"
              className="transition-all duration-300 hover:font-bold"
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="transition-all duration-300 hover:font-bold"
            >
              Our Projects
            </Link>
            <Link
              href="/"
              className="transition-all duration-300 hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="transition-all duration-300 hover:font-bold"
            >
              Our Services
            </Link>
            <Link
              href="/join-us"
              className="transition-all duration-300 hover:font-bold"
            >
              Join Us
            </Link>
          </div>
        </div>

        <Link href="/contactUs">
          <div className="cursor-pointer flex items-center space-x-2 bg-white border rounded-full px-3 py-1 sm:px-4 sm:py-2">
            <span className="text-base sm:text-lg">Contact Us</span>
            <IoIosSend className="text-xl sm:text-2xl" />
          </div>
        </Link>
      </div>

      {/* Middle section */}
      <div className="flex flex-col items-center md:flex-row md:justify-between border-t pt-4">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:space-x-4 mb-4 md:mb-0">
          <FooterIcon icon={<IoLocationSharp />} text="Sri Lanka" />
          <FooterIcon icon={<MdEmail />} text="hello@wrenix.com" />
          <FooterIcon icon={<FaPhone />} text="070 332 4738" />
          <FooterIcon icon={<TfiWorld />} text="www.wrenix.com" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:space-x-6 text-xs sm:text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
          <a href="#" className="hover:underline">
            Refund Policy
          </a>
        </div>
      </div>

      {/* Copyright section */}
      <div className="mt-4 text-center text-xs sm:text-sm text-gray-500">
        All Rights Reserved by Wrenix | ©Wrenix 2025
      </div>
    </footer>
  );
}