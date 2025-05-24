import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

async function main() {
    const res = await prisma.user.findMany({});

    console.log(res);
    const res2 = await prisma.user.findUnique({
        where: {
            id: 2
        },
        include: {
            posts: true
        }
    })
    console.log(res2)
}


main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("user: ")
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })