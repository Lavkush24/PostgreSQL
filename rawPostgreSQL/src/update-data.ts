import { getClient } from "./utils";

async function updateTodo(user_id: number) {
    const client = await getClient();

    const updateQuery = `
        UPDATE todos SET done = $1 WHERE user_id = $2
    `;

    await client.query(updateQuery,[true,user_id]);

    console.log("Todos is updated");
}

updateTodo(1);