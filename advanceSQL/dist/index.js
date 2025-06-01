"use strict";
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
function createtable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
            CREATE TABLE users2 (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(225) UNIQUE NOT NULL,
                password VARCHAR(225) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
            );
        `);
        console.log("Table is created succesfully" + result);
    });
}
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
            INSERT INTO users2 (username,email,password)
            VALUES ($1,$2,$3);
        `, [username, email, password]);
        console.log("Table is created succesfully" + result);
    });
}
function addressTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const res = client.query(`CREATE TABLE addresses2 (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(225) NOT NULL,
            street VARCHAR(225) NOT NULL,
            country VARCHAR(225) NOT NULL,
            pincode VARCHAR(30),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users2(id) ON DELETE RESTRICT
        );`);
        console.log(`table is created successfully  ${res}`);
    });
}
// createtable();
// insertData("Lavkush","hello@gmail.com","343432");
addressTable();
