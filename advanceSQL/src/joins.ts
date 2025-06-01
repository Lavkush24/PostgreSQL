
/*  INNER JOIN  and JOIN do same work return if there is one entry in both the tables
    LEFT JOIN return all which have value in left tabel (users) 
    RIGHT JOIN 
    FULL JOIN  preset any one (want everythng from both the tables)
*/


import { Client } from "pg";

let client = new Client({
    connectionString: "postgres://postgres:147258369@localhost/postgres",
});


async function getUserWithAddress(id: number) {
    await client.connect();

    const res = client.query(`
        SELECT users2.id,users2.username,users2.email,addresses2.city,addresses2.pincode
        FROM users2
        JOIN addresses2 ON users2.id = addresses2.user_id
        WHERE users2.id = $1;`,[id]
    )

    console.log((await res).rows);        
}

getUserWithAddress(6);

