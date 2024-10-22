import { MblxQuestions } from "@prisma/client";
import Question from "./question";
import { getQuestions } from "@/lib/server-utils";

type TDataFetcherProps = {
    amount: number;
};

export default async function DataFetcher({ amount }: TDataFetcherProps) {
    const questions: MblxQuestions[] = await getQuestions(amount);
    return (
        <div>
            {questions.map((q) => (
                <Question key={q.id} question={q.question} answer={q.answer} />
            ))}
        </div>
    );
}
