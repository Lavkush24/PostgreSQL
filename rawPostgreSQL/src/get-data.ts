import { getClient } from "./utils";

async function getUsers() {
    const client = await getClient();

    const userQuery = `SELECT * FROM users`;
    let users = await client.query(userQuery);
    console.log("Users: ");
    for(let user of users.rows){
        console.log(`ID: ${user.id} email: ${user.email}`);
    }
}

async function getUserFromEmail(email: string) {
    const client = await getClient();
     
    const emailQuery = `SELECT * FROM users WHERE email=$1`;
    const user = await client.query(emailQuery,[email]);

    console.log(`ID: ${user.rows[0].id} email: ${user.rows[0].email}`);
}


async function getTodoForUser(user_id: number) {
    const client = await getClient();
     
    const emailQuery = `SELECT * FROM todos WHERE user_id=$1`;
    const todo = await client.query(emailQuery,[user_id]);

    console.log(`ID: ${todo.rows[0].id} title: ${todo.rows[0].title} desc: ${todo.rows[0].description} status: ${todo.rows[0].done}`);
}


getUsers();

getUserFromEmail("lavkush@gmail.com");

getTodoForUser(1);