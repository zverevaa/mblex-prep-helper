import { MblexQuestions } from "@prisma/client";
import Question from "./question";
import { getQuestions } from "@/lib/server-utils";
import ButtonWrapper from "./button-wrapper";
import { Suspense } from "react";

type TDataFetcherProps = {
    amount: number;
};

export default async function DataFetcher({ amount }: TDataFetcherProps) {
    const questions: MblexQuestions[] = await getQuestions(amount);
    return (
        <div className="flex flex-col gap-2">
            <Suspense fallback="loading">
                {questions.map((q) => (
                    <Question
                        key={q.id}
                        question={q.question}
                        answer={q.answer}
                    />
                ))}
            </Suspense>
            <ButtonWrapper />
        </div>
    );
}
