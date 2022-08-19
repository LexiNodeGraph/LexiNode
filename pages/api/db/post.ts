import { PrismaClient } from "@prisma/client";
import { response } from "../lib/response"; 

const prisma = new PrismaClient();

export async function createUser(name: string, email: string) {
    await prisma.$connect();
    const  user = await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    });
    await prisma.$disconnect();
    return new response(200, "User created", user);
}