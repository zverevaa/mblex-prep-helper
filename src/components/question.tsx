"use client";

import { useState } from "react";

type TQuestionProps = {
    question: string;
    answer: string;
};

export default function Question({ question, answer }: TQuestionProps) {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="p-2 rounded-md border-2 border-indigo-950 hover:cursor-pointer bg-indigo-50">
            <p>{question}</p>
            {isOpened && <p>{answer}</p>}
        </div>
    );
}
