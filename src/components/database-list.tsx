import { getAllQuestions } from "@/lib/server-utils";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import Button from "./button";

export default async function DbList() {
    const cellStyles = "border-indigo-300 border-[1px] p-3";
    const questions = await getAllQuestions();
    return (
        <table className="table-auto border-indigo-100 border-1 max-w-3xl">
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
                {questions.map((q) => {
                    return (
                        <tr className="even:bg-indigo-50" key={q.id}>
                            <td className={`${cellStyles} text-center`}>
                                {q.id}
                            </td>
                            <td className={cellStyles}>{q.question}</td>
                            <td className={`${cellStyles} max-w-44`}>
                                {q.answer}
                            </td>
                            <td className={cellStyles}>
                                <Button color={`bg-green-100`}>
                                    <Pencil1Icon />
                                </Button>
                            </td>
                            <td className={cellStyles}>
                                <Button color={`bg-red-100`}>
                                    <TrashIcon />
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
