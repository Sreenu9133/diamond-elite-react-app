// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const authMiddleware = require("../middleware/authMiddleware");

// // GET /api/user/profile
// router.get("/profile", authMiddleware, async (req, res) => {
//   try {
//     // Exclude password from the returned object
//     const user = await User.findByPk(req.user.id, {
//       attributes: { exclude: ["password"] },
//     });

//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     res.status(200).json({ user });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error fetching user profile." });
//   }
// });

// module.exports = router;



import express from "express";
import db from "../config/db.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/user/profile
router.get("/profile", authMiddleware, (req, res) => {
  // Uses req.user.id (or whichever key is saved in your JWT)
  const userId = req.user.id; 

  const sql = "SELECT id, name, email, phone, role, isVerified, rewardPoints FROM users WHERE id = ?";

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ message: "Server error fetching user profile." });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    // Returns the user object matching your React frontend requirements
    res.status(200).json({ user: results[0] });
  });
});

export default router;