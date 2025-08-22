"use client";

import React, {useState} from "react";
import EmailBtn from "@/components/util/emailbtn";
import {MdDone, MdEmail} from "react-icons/md";


export default function NotifyMePage() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleButtonClick = () => {
        setIsFormVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleFormSubmit = async () => {
        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }

        try {
            // Replace with your backend API call
            const response = await fetch("/api/save-email", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email}),
            });

            if (response.ok) {
                setMessage("Thank you! Your email has been added.");
                setEmail("");
                setIsFormVisible(false);
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        } catch (error) {
            setMessage("Error: Unable to save your email.");
        }
    };

    return (
        <div
            className="flex font-ar-one-sans flex-col items-center justify-center pt-[3rem] min-h-screen bg-gray-100 text-center">
            <div className="p-8 rounded-lg">
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-[#100E34] text-[1.875rem]">We’re still</p>
                    <h1 className="text-[#4F48EC] text-[6rem] leading-none font-semibold">Cooking This Web Page.</h1>
                    <div>
                        <p className="text-[#100E34] text-[1.875rem]">We are going to lunch this web page very soon.</p>
                        <p className="text-[#100E34] text-[1.875rem]">Stay Tune.</p>
                    </div>
                </div>

                {!isFormVisible ? (
                    <div className="flex items-center justify-center mt-[3.5rem]" onClick={handleButtonClick}>
                        <EmailBtn email="Notify Me"/>
                    </div>
                ) : (
                    <div className="flex items-center justify-center mt-[3.5rem]">
                        <div
                            className="flex max-w-fit px-2.5 py-2 items-center gap-2 rounded-full bg-[#100E34] shadow-md">
                            <div
                                className="flex px-1 py-1 flex-col justify-center items-center gap-2.5 rounded-full bg-white">
                                <MdEmail className="text-[#100e34] text-2xl"/>
                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleInputChange}
                                className="py-2 border bg-transparent rounded-lg focus:outline-none border-none w-64"
                            />
                            <MdDone onClick={handleFormSubmit} className="text-white text-2xl cursor-pointer"/>
                        </div>
                    </div>
                )}

                {message && <p className="text-sm text-red-500 mt-4">{message}</p>}
            </div>
        </div>
    );
}
