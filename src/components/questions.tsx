import { TQuestion } from "@/lib/types";
import Question from "./question";

type TQuestionsProps = {
    data: TQuestion[];
};

export default function Questions({ data }: TQuestionsProps) {
    return (
        <div className="flex flex-col gap-2 max-w-3xl mx-auto">
            {data.slice(0, 5).map((q) => (
                <Question
                    key={q.question}
                    question={q.question}
                    answer={q.answer}
                />
            ))}
        </div>
    );
}
