import { PrismaClient } from "@prisma/client";
import { response } from "../lib/response"; 

const prisma = new PrismaClient();

export async function createUser(name: string, nickname: string, email: string) {
    await prisma.$connect();
    const createU = await prisma.user.create({
        data: {
            name: name,
            nickname: nickname,
            email: email
        }
    });
    await prisma.$disconnect();
    return new response(200, "User created", createU);
}
