import {PrismaClient} from "@prisma/client";

// declare global {
//     var prisma : PrismaClient | undefined;
// }

// use with development mode
 
const globalForPrisma = globalThis as unknown as {prisma : PrismaClient};
export const db = globalForPrisma.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = db
}

//use the next line in production mode 
// const prisma = new PrismaClient()