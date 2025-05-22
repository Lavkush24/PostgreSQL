import { Client } from "pg";

export async function getClient() {
    const client = new Client("postgresql://postgres:147258369@localhost:5432/postgres");
    await client.connect();
    return client;
}