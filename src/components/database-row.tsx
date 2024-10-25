"use client";

import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import Button from "./button";
import { updateQuestion } from "@/lib/server-utils";
import { useRouter } from "next/navigation";
import { MblxQuestions } from "@prisma/client";

type Refs = {
    [key: string]: HTMLTextAreaElement | null;
};

type TDatabaseRowProps = {
    question: MblxQuestions;
    cellStyles: string;
};

export default function DatabaseRow({
    question,
    cellStyles,
}: TDatabaseRowProps) {
    const [isEditable, setIsEditable] = useState(false);
    const [rows, setRows] = useState(1);
    const textareaRefs = useRef<Refs>({});
    const router = useRouter();
    const handleUpdateQuestion = async (
        id: number,
        question: string,
        answer: string
    ) => {
        await updateQuestion(id, question, answer);
        router.refresh();
    };

    const setRef = (key: string) => (el: HTMLTextAreaElement | null) => {
        textareaRefs.current[key] = el;
    };

    const handleInput = () => {
        setIsEditable((prev) => !prev);
        if (
            isEditable &&
            textareaRefs.current["question"] &&
            textareaRefs.current["answer"]
        ) {
            handleUpdateQuestion(
                question.id,
                textareaRefs.current["question"].value,
                textareaRefs.current["answer"].value
            );
        }
    };

    useEffect(() => {
        const textQuestion = textareaRefs.current["question"];
        const textAnswer = textareaRefs.current["answer"];
        if (textQuestion && textAnswer) {
            if (textQuestion.scrollHeight > textAnswer.scrollHeight) {
                setRows(Math.floor(textQuestion.scrollHeight / 24));
            } else {
                setRows(Math.floor(textAnswer.scrollHeight / 24));
            }
            textQuestion.focus();
            textQuestion.selectionStart = textQuestion.value.length;
        }
    }, [isEditable]);

    return (
        <tr
            className="even:bg-purple-50/50 odd:bg-purple-100/75 border-2 border-purple-400"
            key={question.id}
        >
            <td className={`${cellStyles} text-center font-bold `}>
                {question.id}
            </td>
            <td className={`${cellStyles} text-lg lg:text-base`}>
                <p className="text-base lg:hidden font-bold">Question: </p>
                {isEditable ? (
                    <textarea
                        ref={setRef("question")}
                        rows={rows}
                        spellCheck={false}
                        className="w-full h-full resize-none bg-inherit border-0 focus:border-0 focus:outline-none"
                        defaultValue={question.question}
                    ></textarea>
                ) : (
                    question.question
                )}
            </td>
            <td className={`${cellStyles} lg:max-w-44 text-lg lg:text-base`}>
                <p className="text-base lg:hidden font-bold">Answer:</p>
                {isEditable ? (
                    <textarea
                        ref={setRef("answer")}
                        rows={rows}
                        spellCheck={false}
                        className="w-full h-full resize-none bg-inherit focus:border-0 focus:outline-none flex items-center"
                        defaultValue={question.answer}
                    ></textarea>
                ) : (
                    question.answer
                )}
            </td>
            <td className={`${cellStyles} flex justify-center`}>
                <Button
                    onClick={handleInput}
                    color={`bg-green-100 w-32 lg:w-auto`}
                >
                    <Pencil1Icon />
                </Button>
            </td>
            <td className={`${cellStyles} lg:flex justify-center hidden`}>
                <Button color={`bg-red-100 w-32 lg:w-auto`}>
                    <TrashIcon />
                </Button>
            </td>
        </tr>
    );
}
