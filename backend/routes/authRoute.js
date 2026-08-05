import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js"
const router = express.Router();

router.get("/users", (req, res) => {

    const sql = "SELECT * FROM users";

    db.query(sql, (error, result) => {

        if (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });

    });

});

router.post("/register", async (req, res) => {
    try {
        const { name, phone, password } = req.body;

        // Check required fields
        if (!name || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Check if phone already exists
        const checkUser = "SELECT * FROM users WHERE phone = ?";

        db.query(checkUser, [phone], async (error, result) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    message: error.message
                });
            }

            if (result.length > 0) {
                return res.status(400).json({
                    success: false,
                    message: "Phone number already registered"
                });
            }

            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert User
            const insertUser =
                "INSERT INTO users (name, phone, password) VALUES (?, ?, ?)";

            db.query(
                insertUser,
                [name, phone, hashedPassword],
                (error, result) => {

                    if (error) {
                        return res.status(500).json({
                            success: false,
                            message: error.message
                        });
                    }

                    res.status(201).json({
                        success: true,
                        message: "Registration Successful",
                        userId: result.insertId
                    });

                }
            );

        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
});


router.post("/login", (req, res) => {

    const { phone, password } = req.body;

    if (!phone || !password) {
        return res.status(400).json({
            message: "Phone and Password are required"
        });
    }

    const sql = "SELECT * FROM users WHERE phone = ?";

    db.query(sql, [phone], async (error, result) => {

        if (error) {
            return res.status(500).json({
                message: error.message
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = result[0];

        const match = await bcrypt.compare(password, user.password);
          
        if (!match) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                
                  role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                 role:user.role,

               
            }
        });

    });

});

export default router;




// import express from "express";
// import bcrypt from "bcryptjs";
// import db from "../config/db";
// const router = express.Router()

// router.get("/auth" , async(req,res)=>{
//     const sql = "SELECT * FROM users"
//     db.query(sql,(erro ,result)=>{
//         if(erro){
//             return res.status(404).json({message:erro.message})
//         }
//         res.status(200).json({
//             success:true,
//             data:result
//         })
//     })
  
// })
// export default router















// const express = require("express");
// const bcrypt = require("bcryptjs");
// const db = require("../config/db");

// const router = express.Router();

// router.post("/register", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "Name, email, and password are required" });
//     }

//     // Check if user already exists
//     const [existing] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
//     if (existing.length > 0) {
//       return res.status(409).json({ message: "Email already registered" });
//     }

//     // Hash the password before storing it — never store plain text passwords
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const [result] = await db.query(
//       "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//       [name, email, hashedPassword]
//     );

//     res.status(201).json({
//       message: "User registered successfully",
//       userId: result.insertId,
//     });
//   } catch (err) {
//     console.error("Register error:", err);
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// });

// module.exports = router;


// import User, { emit } from "../models/User.js"
// import bcrypt from "bcryptjs"
// const isemailResg = /^[\^@$]+.\^[\^@$]+\@[\^@$]^/
// const signup =async()=>{
//     const {name , password ,confirmPassword , referralCode} = req.body

// const user = await User.findOne({password})
// if(password) return res.status(401).json({msg:"User Register"}) 

// const hasePassword = await bcrypt.hash(password,10)

// const newUser = new User({name,number,password:hasePassword})

// User.save(newUser)

// res.status(201).json({msg:"UserRegister SucessFully" , User})
 
// }

// const login = async()=>{
//     const {name , password } = req.body
//      const user = await User.findOne({})
// }
