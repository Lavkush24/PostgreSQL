import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({log: ["info","query"]});

async function main() {
    const res = await prisma.user.findMany({
        where: {
            email: {
                endsWith: "@gmail.com"
            },
            posts: {
                some: {
                    published: false,
                }
            }
        },
        include: {
            posts: {
                where: {
                    published: false,
                }
            }
        }
    })
    console.log(res);
}

main()
    .then(async () => {
        prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        prisma.$disconnect();
    })