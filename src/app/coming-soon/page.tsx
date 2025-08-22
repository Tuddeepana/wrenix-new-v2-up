import React from "react";
import Image from 'next/image';

import styles from './comingSoon.module.css';

import EmailBtn from '@/components/util/emailbtn';

import logo from '/public/logo.png'
import {MdEmail, MdNavigateNext} from "react-icons/md";

const ComingSoonPage: React.FC = () => {
    return (
        <div
            className={`flex w-screen h-screen flex-col justify-between items-center bg-white overflow-hidden pointer-events-none`}>

            {/* Large Display Version */}
            <div className="hidden lg:flex flex-col justify-between items-center flex-1 self-stretch">
                <div className="flex px-5 py-3 justify-between items-start self-stretch">
                    <Image src={logo} alt={'logo'} width={200} height={150}/>
                    <div
                        className="flex px-2.5 py-2 items-center gap-2 rounded-full bg-[#100E34] shadow-md cursor-default pointer-events-none">
                        <div
                            className="flex px-1 py-1 flex-col justify-center items-center gap-2.5 rounded-full bg-white">
                            <MdEmail className="text-[#100e34] text-2xl"/>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="text-white text-center font-ar-one-sans text-[1rem] font-medium leading-[0.9375rem] pointer-events-none">
                                hello@wrenix.com
                            </p>
                            <MdNavigateNext className="text-white text-2xl"/>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-0 justify-center items-end">
                    <div className="flex flex-col pt-[10vh] md:-mb-[3rem]">
                        <p
                            className="text-[#484848] text-center font-ar-one-sans text-[5.5vw] font-medium leading-[3.125rem]">
                            It<span className="text-[#FFBF18]">’</span>s a New Year
                        </p>
                        <h1 className={`text-center font-inter md:text-[29.5vw] leading-none -mt-[6rem] ${styles.heading}`}>
                            Wrenix
                        </h1>
                    </div>
                    <p
                        className="text-[#484848] text-right font-ar-one-sans text-[3.5vw] font-medium leading-none pr-[4rem]">
                        We are <span className="text-[#FFBF18]">cooking</span> a<br/> <span className="text-[#4F48EC]">New Look.</span>
                    </p>
                </div>
                <div className="flex py-5 pb-3 flex-col justify-center items-center gap-2.5 self-stretch">
                    <div className="flex flex-col items-center gap-2.5">
                        <p className="text-[#2A2A2A] text-center font-inter text-[0.9375rem] font-medium leading-normal">
                            All Right Reserved by Wrenix | © Wrenix 2025
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Display Version */}
            <div className="lg:hidden flex flex-col h-screen p-[2rem] justify-between items-center">
                <Image src={logo} alt={'logo'} width={200} height={150}/>
                <div className="flex flex-col items-center gap-[5rem]">
                    <div
                        className="flex flex-col items-center text-center font-ar-one-sans text-[15vw] text-normal font-medium gap-[1rem]">
                        <h1 className="text-[#FFBF18] ">New <span className="text-[#4F48EC]">Face</span></h1>
                        <h1 className="text-[#484848] leading-10">For</h1>
                        <h1 className="text-[#FFBF18]">New <span className="text-[#4F48EC]">Year</span></h1>
                    </div>
                    <EmailBtn email="hello@wrenix.com" />
                </div>
                <p className="text-[#2A2A2A] text-center font-inter text-[0.9rem] font-medium leading-normal">
                    All Right Reserved by Wrenix | © Wrenix 2025
                </p>
            </div>
        </div>
    );
}

export default ComingSoonPage;