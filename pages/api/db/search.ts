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

export async function findAllPapers(){
    await prisma.$connect();
    const papers = await prisma.paper.findMany();
    await prisma.$disconnect();
    return new response(200, "Papers found", papers); 
}

export async function findPaper(id: string) {
    await prisma.$connect();
    const paper = await prisma.paper.findUnique({
        where: {
            id: id
        }
    });
    await prisma.$disconnect();
    return new response(200, "Paper found", paper);
}

export async function findKeyword(key: string) {
    await prisma.$connect();
    const keyword = await prisma.paper.findMany({
        where: {
            keywords: {
                has: key
            }
        }
    });
    await prisma.$disconnect();
    return new response(200, "Papers found", keyword);
}

