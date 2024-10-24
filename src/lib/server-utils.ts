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
export const getAllQuestions = async (page = 1) => {
    const questions = await prisma.mblxQuestions.findMany({
        orderBy: {
            id: "desc",
        },
        take: 10,
        skip: (page - 1) * 10,
    });
    const totalCount = await prisma.mblxQuestions.count();
    return { questions, totalCount };
};

export const addQuestion = async (formData: FormData) => {
    await prisma.mblxQuestions.create({
        data: {
            question: formData.get("question") as string,
            answer: formData.get("answer") as string,
        },
    });
};

export const updateQuestion = async (
    id: number,
    question: string,
    answer: string
) => {
    await prisma.mblxQuestions.update({
        where: {
            id: id,
        },
        data: {
            question: question,
            answer: answer,
        },
    });
};

export const deleteQuestion = async (id: number) => {
    await prisma.mblxQuestions.delete({
        where: {
            id: id,
        },
    });
};
