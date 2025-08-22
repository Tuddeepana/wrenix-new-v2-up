import React from 'react';

interface FooterIconProps {
    icon: React.ReactNode;
    text: string;
}

const FooterIcon: React.FC<FooterIconProps> = ({ icon, text }) => {
    return (
        <div className="flex max-w-fit px-2.5 py-2 items-center gap-2 rounded-full bg-[#100E34] shadow-md cursor-pointer">
            <div className="flex px-1 py-1 flex-col justify-center items-center gap-2.5 rounded-full bg-white">
                {icon}
            </div>
            <div className="flex justify-center items-center">
                <p className="text-white text-center font-ar-one-sans text-[1rem] font-medium leading-[0.9375rem] pointer-events-none">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default FooterIcon;