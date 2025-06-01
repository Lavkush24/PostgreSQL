"use strict";
/* when you want run multiple queries and they both make changes in the dbs if only if
    both qeury run duccesfully then we use transactions */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
let client = new pg_1.Client({
    connectionString: "postgres://postgres:147258369@localhost/postgres",
});
function addUserWithAddress() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        try {
            yield client.query('BEGIN;');
            const user = yield client.query(`
                INSERT INTO users2 (username,email,password) 
                VALUES ($1,$2,$3)
                RETURNING id;
                `, ['kush', 'kush@gmail.com', 'kdjfd']);
            let user_id = user.rows[0].id;
            console.log(`user is inserted succesfully  ${user.rows[0]}`);
            const address = yield client.query(`
                INSERT INTO addresses2 (user_id,city,street,country,pincode)
                VALUES($1,$2,$3,$4,$5);
                `, [user_id, 'Agra', 'bah', 'Greater', '235562']);
            console.log(`address inserted successfully ${address}`);
            yield client.query(`COMMIT;`);
            console.log(`Both operation executed succesfully`);
        }
        catch (e) {
            yield client.query('ROLLBACK;');
            console.log("Error durin insertion");
        }
        finally {
            yield client.end();
        }
    });
}
addUserWithAddress();
