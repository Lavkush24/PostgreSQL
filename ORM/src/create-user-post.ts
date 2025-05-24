import { title } from "process"
import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: "Kushwaha",
            email: "kushwaha@gmail.com",
            posts: {
                create: [
                    {
                        title: "the first post",
                        
                    },
                    {
                        title: "the second post",
                    }
                ]
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