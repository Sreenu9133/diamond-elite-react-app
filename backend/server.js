<<<<<<< HEAD
require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
=======
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import db from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import adminRoutes from "./routes/adminRoute.js";
const PORT = 5000
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server Running on ${PORT}`);
});



>>>>>>> e263cf0 (backend+frontend)
