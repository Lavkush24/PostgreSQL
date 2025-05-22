import { getClient } from "../utils";

async function getTodosAndUsers(user_id:number) {
    const client = await getClient();

    const joinsQuery = `
        SELECT users.*,todos.title,todos.description,todos.done
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1
    `;

    const res = await client.query(joinsQuery,[user_id]);

    const result = res.rows;
    console.log(result);
}

getTodosAndUsers(1);