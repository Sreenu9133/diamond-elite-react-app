
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "...",
  user: "...",
  password: "...",
  database: "diamond_elite"
});

export default db;