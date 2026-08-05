import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL Connected");
    }
});

export default db;















// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
    
// });
// console.log("ENV CHECK:", {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD ? "(set)" : "(missing)",
//   database: process.env.DB_NAME,
// });

// connection.connect((err) => {
//     if (err) {
//         console.log("Connection Failed");
//         console.log(err);
//         return;
//     }

//     console.log("MySQL Connected");
// });

// module.exports = connection;








// import mongoose from "mongoose";
// const connect = async()=>{
// try{
//     await mongoose.connect("mongodb://localhost:27017/diamond")
//     console.log("Mongodb Connacted")

// }catch(error)
// {
//     console.log(error,"Mongodb Not Conneacted ")
// }
// }
// export default connect

// import mysql from "mysql2/promise";
// import dotenv from "dotenv"

// dotenv.config()
// const pool = mysql.createPool({

//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME
// });
// export default pool;