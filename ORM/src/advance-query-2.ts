import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({log: ["info","query"]});

async function main() {
    
}

main()
    .then(async () => {
        prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        prisma.$disconnect();
    })