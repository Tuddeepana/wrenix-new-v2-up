import React from 'react';

interface CountItemProps {
    count: number;
    label: string;
}

const CountItem: React.FC<CountItemProps> = ({ count, label }) => {
    return (
        <div className="flex flex-col items-center gap-1 justify-center max-w-[10rem]">
            <span className="text-center text-[#c1e8ff] text-[2.5rem] font-[500]">{count}+</span>
            <span className="text-center text-[#c1e8ff] font-[400] text-[1.8rem]">{label}</span>
        </div>
    );
};

export default CountItem;