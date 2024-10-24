import React from "react";

type TButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    color?: string;
};

export default function Button({ children, onClick, color }: TButtonProps) {
    return (
        <button
            className={`${color} p-2 rounded-md border-[1px] border-purple-300`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
