"use client";

import { addQuestion } from "@/lib/server-utils";
import { useRef } from "react";

export default function NewQuestionForm() {
    const inputClasses =
        "rounded-md border-1  py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6";
    const ref = useRef<HTMLFormElement>(null);
    return (
        <div className="flex justify-center">
            <form
                ref={ref}
                action={(formData) => {
                    addQuestion(formData);
                    ref.current?.reset();
                }}
                className="flex flex-col gap-3 max-w-screen-lg min-w-96"
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="question">Question</label>
                    <input
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
                        placeholder="Here goes the answer to the new question"
                        className={inputClasses}
                    ></input>
                </div>
                <button className="py-2 px-5 rounded-md self-end bg-indigo-100">
                    Submit
                </button>
            </form>
        </div>
    );
}
