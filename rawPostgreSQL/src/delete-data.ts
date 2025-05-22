import { getClient } from "./utils";

async function deleteTodo(id:number) {
    const client = await getClient();

    const deleteQuery = `DELETE FROM todos WHERE id = $1`;
    await client.query(deleteQuery,[id]);

    console.log(`Todo with ${id} is deleted`);
}

deleteTodo(1);