import { getClient } from "./utils";

async function createEnteries() {
    const client = await getClient();

    const createUser = `INSERT INTO users(email,password) VALUES ($1,$2) RETURNING id`;
    const userValues = ["lavkush@gmail.com","hashedPass"];

    let responce = await client.query(createUser,userValues);

    const createTodos = `INSERT INTO todos(title,description,user_id,done) VALUES($1,$2,$3,$4) RETURNING id`;
    const todoValues = ["go to gym","workout",responce.rows[0].id, false];

    await client.query(createTodos,todoValues);

    console.log("data is inserted");
}

createEnteries();