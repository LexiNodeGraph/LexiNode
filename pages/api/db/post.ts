import { PrismaClient } from "@prisma/client";
import { response } from "../lib/response"; 

const prisma = new PrismaClient();

export async function createUser(name: string, picture: string, nickname: string, email: string) {
    await prisma.$connect();
    const createU = await prisma.user.create({
        data: {
            name: name,
            picture: picture,
            nickname: nickname,
            email: email
        }
    });
    await prisma.$disconnect();
    return new response(200, "User created", createU);
}

export async function createPaper(title: string, journal_title: string, research_field: string, 
                                  year: string, international: number, web_link: string, abstract: string, keywords: string[]) {
    await prisma.$connect();
    const createU = await prisma.paper.create({
        data: {
            title: title,
            journal_title: journal_title,
            research_field: research_field,
            year: year,
            international: international,
            web_link: web_link,
            abstract: abstract,
            keywords: keywords
        }
    });
    await prisma.$disconnect();
    return new response(200, "User created", createU);
}