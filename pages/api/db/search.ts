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