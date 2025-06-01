import { Client } from 'pg';

let client = new Client({
    connectionString: "postgres://postgres:147258369@localhost/postgres",
});


async function createtable() {
    await client.connect();
    const result = await client.query(`
            CREATE TABLE users2 (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(225) UNIQUE NOT NULL,
                password VARCHAR(225) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
            );
        `)

    console.log("Table is created succesfully" + result);
}


async function insertData(username: string,email:string,password: string) {
    await client.connect();
    const result = await client.query(`
            INSERT INTO users2 (username,email,password)
            VALUES ($1,$2,$3);
        `,[username,email,password])

    console.log("Table is created succesfully" + result);
}



async function addressTable() {
    await client.connect();
    const res = client.query(`CREATE TABLE addresses2 (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(225) NOT NULL,
            street VARCHAR(225) NOT NULL,
            country VARCHAR(225) NOT NULL,
            pincode VARCHAR(30),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE RESTRICT
        );`
    )
    console.log(`table is created successfully  ${res}`);
}


// createtable();
// insertData("Lavkush","hello@gmail.com","343432");
addressTable();

