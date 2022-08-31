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

export async function findUser(nickname: string) {
    await prisma.$connect();
    const user = await prisma.user.findUnique({
        where: {
            nickname: nickname
            } 
          });
    await prisma.$disconnect();
    return new response(200, "User found", user);
}

export async function findAuthorUser(nickname: string) {
    await prisma.$connect();
    const user = await prisma.user.findMany({
        where: {
            nickname: nickname,
            isAuthor: true
            } 
          });
    await prisma.$disconnect();
    return new response(200, "User found", user);
}

export async function findAllAuthorUsers() {
    await prisma.$connect();
    const user = await prisma.user.findMany({
        where: {
            isAuthor: true
            } 
          });
    await prisma.$disconnect();
    return new response(200, "User found", user);
}

export async function findAllPapers(){
    await prisma.$connect();
    const papers = await prisma.paper.findMany();
    await prisma.$disconnect();
    return new response(200, "Papers found", "OK"); 
}