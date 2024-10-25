import { MblxQuestions } from "@prisma/client";
import DatabaseRow from "./database-row";

type TDatabaseTableProps = {
    questions: MblxQuestions[];
};

export default async function DatabaseTable({
    questions,
}: TDatabaseTableProps) {
    const cellStyles =
        "block lg:table-cell border-purple-300 border-0 py-2 px-4 lg:p-3";

    return (
        <table className="lg:border-spacing-0 border-separate border-2 border-purple-400 border-solid rounded-md overflow-hidden">
            <thead className="hidden lg:table-row-group bg-purple-200">
                <tr>
                    <th className={cellStyles}>Id</th>
                    <th className={cellStyles}>Question</th>
                    <th className={cellStyles}>Answer</th>
                    <th className={cellStyles}></th>
                    <th className={cellStyles}></th>
                </tr>
            </thead>
            <tbody>
                {questions.map((q) => (
                    <DatabaseRow
                        key={q.id}
                        question={q}
                        cellStyles={cellStyles}
                    />
                ))}
            </tbody>
        </table>
    );
}
