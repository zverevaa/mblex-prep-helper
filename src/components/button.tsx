import React from "react";

type TButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    color?: string;
};

export default function Button({ children, onClick, color }: TButtonProps) {
    return (
        <button
            className={`${color} flex justify-center items-center text-center p-2 rounded-md border-[1px] border-purple-300 w-full h-full`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
