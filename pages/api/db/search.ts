import { PrismaClient } from "@prisma/client";
import { response } from "../lib/response"; 

const prisma = new PrismaClient();

export async function find_data(id: string) {
    await prisma.$connect();
    const data = await prisma.dataset.findUnique({
        where: {
            id: id
            } 
          });
    await prisma.$disconnect();
    return new response(200, "Data found", data);
}

export async function findUser(email: string) {
    await prisma.$connect();
    const user = await prisma.user.findUnique({
        where: {
            email: email
            } 
          });
    await prisma.$disconnect();
    return new response(200, "User found", user);
}

export async function findAuthor(email: string) {
    await prisma.$connect();
    const user = await prisma.author.findUnique({
        where: {
            email: email
            } 
          });
    await prisma.$disconnect();
    return new response(200, "User found", user);
}