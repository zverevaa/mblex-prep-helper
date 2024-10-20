"use client";

import { useState } from "react";

type TQuestionProps = {
    question: string;
    answer: string;
};

export default function Question({ question, answer }: TQuestionProps) {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div>
            <p>{question}</p>
            {isOpened && <p>{answer}</p>}
        </div>
    );
}
