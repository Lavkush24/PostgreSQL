import { todo } from "node:test";
import { PrismaClient } from "../generated/prisma";

const client = new PrismaClient();

async function addUser(usename: string, password: string, firstName: string, lastName: string) {

    let user = await client.user.create({
        data: {
            usename,
            password,
            firstName,
            lastName
        }
    })
    console.log(`user inserted succesfully   ${user}`);
}


// addUser('lav23','345','lavkush','kushwaha');



async function addTodo(t: string,des: string,d: boolean,userId: number) {
    await client.todo.create({
        data: {
            title: t,
            description: des,
            done: d,
            user_id: userId
        }
    })
    console.log("todo inserted");
}

addTodo("this test", "hello test", true, 1);

async function getTodos(userid: number) {
    const res = await client.todo.findMany({
        where: {
            user_id :userid
        },
        select: {
            title: true,
            description: true,
            done: true,
            user: {
                select: {
                    firstName: true,
                    lastName: true
                }
            }
        }
    })
    console.log(res);
}

getTodos(1);