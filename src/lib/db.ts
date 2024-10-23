// import { PrismaClient } from "@prisma/client";
// import { PrismaLibSQL } from "@prisma/adapter-libsql";
// import { createClient } from "@libsql/client";
import prismaRandom from "prisma-extension-random";

// const libsql = createClient({
//     url: `${process.env.TURSO_DATABASE_URL}`,
//     authToken: `${process.env.TURSO_AUTH_TOKEN}`,
// });

// const adapter = new PrismaLibSQL(libsql);
// export const prisma = new PrismaClient({ adapter }).$extends(prismaRandom());

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
    return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma.$extends(prismaRandom());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
