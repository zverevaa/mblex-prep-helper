"use server";
import prisma from "./db";

//Fetches random questions
export const getQuestions = async (amount: number) => {
    const questions = await prisma.mblxQuestions.findManyRandom(amount, {
        select: {
            question: true,
            answer: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    return questions;
};

//Fetches all questions
export const getAllQuestions = async () => {
    const questions = await prisma.mblxQuestions.findMany({
        orderBy: {
            id: "desc",
        },
    });
    return questions;
};

export const addQuestion = async (formData: FormData) => {
    await prisma.mblxQuestions.create({
        data: {
            question: formData.get("question") as string,
            answer: formData.get("answer") as string,
        },
    });
};
