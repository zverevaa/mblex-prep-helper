"use client";

import { TriangleDownIcon } from "@radix-ui/react-icons";
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
            className={`flex flex-col gap-3 p-3 rounded-md border-2 border-indigo-950 hover:cursor-pointer bg-indigo-50 ${
                isOpened ? "my-2" : ""
            }`}
        >
            <p className="flex items-center justify-between">
                {question}
                <TriangleDownIcon height={24} width={24} />
            </p>
            {isOpened && (
                <p className="border-t-2 border-indigo-800 pt-2">{answer}</p>
            )}
        </div>
    );
}
