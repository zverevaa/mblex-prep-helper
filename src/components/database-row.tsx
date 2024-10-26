"use client";

import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import Button from "./button";
import { deleteQuestion, updateQuestion } from "@/lib/server-utils";
import { useRouter } from "next/navigation";
import { MblexQuestions } from "@prisma/client";
import DatabaseRowDelete from "./database-row-delete";

type Refs = {
    [key: string]: HTMLTextAreaElement | null;
};

type TDatabaseRowProps = {
    question: MblexQuestions;
};

export default function DatabaseRow({ question }: TDatabaseRowProps) {
    const [isEditable, setIsEditable] = useState(false);
    const [rows, setRows] = useState(1);
    const [isDeleteActive, setIsDeleteActive] = useState(false);
    const textareaRefs = useRef<Refs>({});
    const router = useRouter();
    const handleUpdateQuestion = async (
        id: number,
        question: string,
        answer: string
    ) => {
        await updateQuestion(id, question, answer).then(() => router.refresh());

        console.log("refreshed");
    };

    const handleDeleteQuestion = async (id: number) => {
        await deleteQuestion(id);
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
        <>
            {!isDeleteActive && (
                <div className="flex flex-col lg:flex-row lg:items-center px-3 even:bg-purple-200 odd:bg-purple-100 basis-12 w-full border-2 border-purple-400 rounded-md">
                    <div className="flex items-center justify-center basis-12 p-2 font-bold">
                        {question.id}
                    </div>
                    <div className="lg:w-[65%] w-full p-2">
                        <p className="text-base lg:hidden font-bold">
                            Question:
                        </p>
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
                    </div>
                    <div className="lg:w-[35%] w-full p-2">
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
                    </div>
                    <div className="flex justify-center items-center basis-16 p-2">
                        {" "}
                        <Button
                            onClick={handleInput}
                            color={`bg-green-200 hover:bg-green-300 transition w-32 lg:w-auto `}
                        >
                            <Pencil1Icon />
                        </Button>
                    </div>
                    <div className="lg:flex hidden justify-center items-center basis-16 p-2">
                        {" "}
                        <Button
                            onClick={() => setIsDeleteActive(true)}
                            color={`bg-red-200 hover:bg-red-300 transition w-32 lg:w-auto`}
                        >
                            <TrashIcon />
                        </Button>
                    </div>
                </div>
            )}
            {isDeleteActive && (
                <DatabaseRowDelete
                    onOk={() => {
                        handleDeleteQuestion(question.id);
                        setIsDeleteActive(false);
                        router.refresh();
                    }}
                    onCancel={() => setIsDeleteActive(false)}
                />
            )}
        </>
    );
}
