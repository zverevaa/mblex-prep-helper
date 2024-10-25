"use client";

import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type TQuestionProps = {
    question: string;
    answer: string;
};

export default function Question({ question, answer }: TQuestionProps) {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div
            onClick={() => setIsOpened((prev) => !prev)}
            className={`flex flex-col p-3 rounded-md border-2 border-purple-400 hover:cursor-pointer hover:bg-purple-200 transition bg-purple-50  ${
                isOpened ? "my-1" : ""
            }`}
        >
            <div className="flex items-center justify-between transition">
                <p className="w-[90%]">{question}</p>
                {isOpened ? (
                    <TriangleUpIcon height={"24px"} width={"24px"} />
                ) : (
                    <TriangleDownIcon height={"24px"} width={"24px"} />
                )}
            </div>
            {isOpened && (
                <p className="border-t-2 border-indigo-800 pt-2 mt-4">
                    {answer}
                </p>
            )}
        </div>
    );
}
