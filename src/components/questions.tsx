"use client";
import { TQuestion } from "@/lib/types";
import Question from "./question";
import { useState } from "react";
import QuestionsAmount from "./questions-amount";

type TQuestionsProps = {
    data: TQuestion[];
};

export default function Questions({ data }: TQuestionsProps) {
    const [amount, setAmount] = useState(5);

    const handleAmountChange = (amt: number) => {
        setAmount(amt);
    };

    return (
        <div className="flex flex-col gap-2 max-w-3xl mx-auto">
            <QuestionsAmount
                amount={amount}
                onAmountChange={handleAmountChange}
            />
            {data.slice(0, amount).map((q) => (
                <Question
                    key={q.question}
                    question={q.question}
                    answer={q.answer}
                />
            ))}
        </div>
    );
}
