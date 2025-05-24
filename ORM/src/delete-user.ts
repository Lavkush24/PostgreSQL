import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

async function main() {
    // const deletedPost = await prisma.post.deleteMany({
    //     where: {
    //         authorId: 1
    //     },
    // })
    // console.log(deletedPost)

    const deletedUser = await prisma.user.delete({
        where: {
            id: 1
        }
    })
    console.log(deletedUser)
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("deleted succesfully")
    }) 
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })