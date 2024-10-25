"use client";

import { addQuestion } from "@/lib/server-utils";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Button from "./button";

export default function NewQuestionForm() {
    const inputClasses =
        "rounded-md border-1 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-purple-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6";
    const formRef = useRef<HTMLFormElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();
    return (
        <div className="flex justify-center w-full">
            <form
                ref={formRef}
                action={(formData) => {
                    addQuestion(formData);
                    formRef.current?.reset();
                    inputRef.current?.focus();
                    router.refresh();
                }}
                autoComplete="off"
                className="flex flex-col gap-3 max-w-96 w-full"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="question">Question</label>
                    <input
                        ref={inputRef}
                        id="question"
                        name="question"
                        type="text"
                        placeholder="Here goes the new question"
                        className={inputClasses}
                    ></input>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="answer">Answer</label>
                    <input
                        id="answer"
                        name="answer"
                        type="text"
                        placeholder="Here goes the answer"
                        className={inputClasses}
                    ></input>
                </div>
                <Button color="h-24 lg:w-32 lg:h-12 self-end bg-purple-300/75 hover:bg-purple-300 transition font-bold">
                    Submit
                </Button>
            </form>
        </div>
    );
}
