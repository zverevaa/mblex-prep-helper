import { promises as fs } from "fs";
import Question from "./question";

export default async function Questions() {
    const tempDb = await fs.readFile(
        process.cwd() + "/src/lib/tempdb.json",
        "utf8"
    );
    const data = JSON.parse(tempDb);
    return (
        <div className="max-w-3xl mx-auto">
            {data.map((q) => (
                <Question
                    key={q.question}
                    question={q.question}
                    answer={q.answer}
                />
            ))}
        </div>
    );
}
