import { MblexQuestions } from "@prisma/client";
import DatabaseRow from "./database-row";

type TDatabaseTableProps = {
    questions: MblexQuestions[];
};

export default async function DatabaseTable({
    questions,
}: TDatabaseTableProps) {
    return (
        <div className="flex flex-col gap-y-2 w-full">
            <div className="lg:flex hidden px-3 bg-purple-300 w-full rounded-md items-center font-bold border-2 border-purple-400">
                <div className="flex justify-center basis-12 p-2">Id</div>
                <div className="w-[65%] p-2">Question</div>
                <div className="w-[35%] p-2">Answer</div>
                <div className="basis-16 p-2"></div>
                <div className="basis-16 p-2"></div>
            </div>
            <div className="flex flex-col gap-2">
                {questions.map((q) => (
                    <DatabaseRow key={q.id} question={q} />
                ))}
            </div>
        </div>
    );
}
