import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTiktok, FaBars, FaTimes } from "react-icons/fa";

import Logo from "/public/logo/wrenix_logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Design */}
  <div className="w-screen px-[2rem] py-[1rem] flex items-center justify-between bg-transparent  fixed z-20">
        <Link href={"/"}>
          <Image src={Logo} alt="Wrenix logo" width={150} />
        </Link>
        <nav className="hidden md:flex py-[1rem] px-[2rem] justify-center items-center gap-[2rem] rounded-[6rem] bg-[#100e34] shadow-[2px_6px_4px_0px_rgba(0,0,0,0.25)] text-white text-center font-ar-one-sans text-[1rem] font-medium">
          <Link href={"/about"}>About Us</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contactUs"}>Contact Us</Link>
        </nav>
        <nav className="hidden md:flex gap-[0.5rem] text-[#100E34]">
          <Link
            href={"https://facebook.com"}
            className="flex justify-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"https://instagram.com"}
            className="flex justify-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
          >
            <FaInstagram />
          </Link>
          <Link
            href={"https://linkedin.com"}
            className="flex justify-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
          >
            <FaLinkedin />
          </Link>
          <Link
            href={"https://youtube.com"}
            className="flex justify-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
          >
            <FaYoutube />
          </Link>
          <Link
            href={"https://tiktok.com"}
            className="flex justify-center items-center bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[0.5rem] h-fit text-[1.3rem] rounded-full"
          >
            <FaTiktok />
          </Link>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#100E34] text-[2rem]">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Design */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#100e34] text-white flex flex-col items-center justify-center transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-[2rem]">
          <FaTimes />
        </button>
        <nav className="flex flex-col items-center gap-[2rem] text-[1.5rem] font-medium">
          <Link href={"/about"} onClick={toggleMenu}>About Us</Link>
          <Link href={"/projects"} onClick={toggleMenu}>Projects</Link>
          <Link href={"/services"} onClick={toggleMenu}>Services</Link>
          <Link href={"/contactUs"} onClick={toggleMenu}>Contact Us</Link>
        </nav>
        <hr className="w-3/4 my-[2rem] border-white" />
        <nav className="flex gap-[1rem] text-[2rem]">
          <Link href={"https://facebook.com"} onClick={toggleMenu}>
            <FaFacebook />
          </Link>
          <Link href={"https://instagram.com"} onClick={toggleMenu}>
            <FaInstagram />
          </Link>
          <Link href={"https://linkedin.com"} onClick={toggleMenu}>
            <FaLinkedin />
          </Link>
          <Link href={"https://youtube.com"} onClick={toggleMenu}>
            <FaYoutube />
          </Link>
          <Link href={"https://tiktok.com"} onClick={toggleMenu}>
            <FaTiktok />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
