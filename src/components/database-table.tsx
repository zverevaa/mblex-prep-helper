import { MblxQuestions } from "@prisma/client";
import DatabaseRow from "./database-row";

type TDatabaseTableProps = {
    questions: MblxQuestions[];
};

export default async function DatabaseTable({
    questions,
}: TDatabaseTableProps) {
    const cellStyles = "border-purple-300 border-[1px] p-3";

    return (
        <table className="table-auto border-purple-100 border-1">
            <thead>
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
