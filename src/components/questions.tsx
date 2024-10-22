import { useState } from "react";
import QuestionsAmount from "./questions-amount";
import DataFetcher from "./data-fetcher";

export default function Questions() {
    // const [amount, setAmount] = useState(5);

    // const handleAmountChange = (amt: number) => {
    //     setAmount(amt);
    // };

    return (
        <div className="flex flex-col gap-2 max-w-3xl mx-auto">
            {/* <QuestionsAmount
                amount={amount}
                onAmountChange={handleAmountChange}
            /> */}
            <DataFetcher amount={10} />
            {/* {data.slice(0, amount).map((q) => (
                <Question
                    key={q.question}
                    question={q.question}
                    answer={q.answer}
                />
            ))} */}
        </div>
    );
}
