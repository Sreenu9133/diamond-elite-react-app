
// CREATE DATABASE IF NOT EXISTS diamond_elite;
// USE diamond_elite;

// CREATE TABLE IF NOT EXISTS users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   phone VARCHAR(150) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "...",
  user: "...",
  password: "...",
  database: "diamond_elite"
});

export default db;