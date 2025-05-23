import { create } from 'domain'
import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.create({
    data: {
        email: "Lavkush@gmail.com",
        name: "lavkush"
    },
  })
  console.log(user)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })