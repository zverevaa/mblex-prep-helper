import { prisma } from "./db";

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
