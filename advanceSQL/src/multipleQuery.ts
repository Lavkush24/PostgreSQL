/* when you want run multiple queries and they both make changes in the dbs if only if
    both qeury run duccesfully then we use transactions */

    import { Client } from "pg";

    let client = new Client({
        connectionString: "postgres://postgres:147258369@localhost/postgres",
    });

    async function addUserWithAddress() {
        await client.connect();

        try {
            await client.query('BEGIN;');
    
            const user = await client.query(`
                INSERT INTO users2 (username,email,password) 
                VALUES ($1,$2,$3)
                RETURNING id;
                `,['kush','kush@gmail.com','kdjfd']
            )
            
            let user_id = user.rows[0].id;
    
            console.log(`user is inserted succesfully  ${user.rows[0]}`);
    
            const address = await client.query(`
                INSERT INTO addresses2 (user_id,city,street,country,pincode)
                VALUES($1,$2,$3,$4,$5);
                `,[user_id,'Agra','bah','Greater','235562']
            )
    
            console.log(`address inserted successfully ${address}`);
    
            await client.query(`COMMIT;`);
    
            console.log(`Both operation executed succesfully`);
        }
        catch(e) {
            await client.query('ROLLBACK;');
            console.log("Error durin insertion");
        }
        finally {
            await client.end();
        }
    }

addUserWithAddress();