import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.update({
        where: {
            id: 1,
        },
        data: {
            name: "Lavkush kushwaha"
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("Updated")
    }) 
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })