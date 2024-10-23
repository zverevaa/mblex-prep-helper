import { PrismaClient } from "@prisma/client";
// import { PrismaLibSQL } from "@prisma/adapter-libsql";

// const libsql = createClient({
//     url: `${process.env.TURSO_DATABASE_URL}`,
//     authToken: `${process.env.TURSO_AUTH_TOKEN}`,
// });

// const adapter = new PrismaLibSQL(libsql);
// const prisma = new PrismaClient({ adapter });

const prisma = new PrismaClient();

const questions = [
    {
        id: 1,
        question:
            "What system accounts for approximately 16% of the human body?",
        answer: "Integumentary system",
    },
    {
        id: 2,
        question: "Which system is comprised of 206 individual organs?",
        answer: "Skeletal system",
    },
    {
        id: 3,
        question:
            "Which system is comprised of smooth, voluntary, and cardiac tissues?",
        answer: "Muscular system",
    },
    {
        id: 4,
        question:
            "Which system acts like the nervous system, but with slower reaction time and longer-lasting effects?",
        answer: "Endocrine system",
    },
    {
        id: 5,
        question:
            "Which system is a closed circuit whose main function is transportation through a network of vessels?",
        answer: "Cardiovascular system",
    },
    {
        id: 6,
        question:
            "Which system transports a whitish, watery fluid called lymph?",
        answer: "Lymphatic system",
    },
    {
        id: 7,
        question:
            "Which system produces waste in the kidney that moves to the ureters, and is stored in the urinary bladder?",
        answer: "Urinary system",
    },
    {
        id: 8,
        question:
            "Which system functions as a means to rid the body of carbon dioxide?",
        answer: "Respiratory system",
    },
    {
        id: 9,
        question: "Which system includes both the teeth and the pharynx?",
        answer: "Digestive system",
    },
    {
        id: 10,
        question: "What organ is considered the female gonads?",
        answer: "Ovaries",
    },
    {
        id: 11,
        question:
            "Which type of membrane is found in closed cavities in the body?",
        answer: "Serous membranes",
    },
    {
        id: 12,
        question: "What is the purpose of the synergist in movement?",
        answer: "Add support to the contracting prime mover",
    },
];

async function main() {
    console.log(`Start seeding ...`);

    for (const question of questions) {
        const result = await prisma.mblxQuestions.upsert({
            where: { id: question.id },
            update: {},
            create: question,
        });
        console.log(`Created event with id: ${result.id}`);
    }

    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
