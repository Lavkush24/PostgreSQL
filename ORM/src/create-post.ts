import { PrismaClient } from "../generated/prisma"

// in prisma client if i use the log than it will give the sql aueries in the cli
const prisma = new PrismaClient({log: ['info','query']})

async function main() {
    await prisma.post.create({
        data: {
            title: "the first prisma post",
            content: "Randoms content of the prisma post",
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    }) 
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })