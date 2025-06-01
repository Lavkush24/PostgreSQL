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
function getUserWithAddress(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const res = client.query(`
        SELECT users2.id,users2.username,users2.email,addresses2.city,addresses2.pincode
        FROM users2
        JOIN addresses2 ON users2.id = addresses2.user_id
        WHERE users2.id = $1;`, [id]);
        console.log((yield res).rows);
    });
}
getUserWithAddress(6);
