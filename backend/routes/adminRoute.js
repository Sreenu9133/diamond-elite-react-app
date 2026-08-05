import express from "express";

import { getAllUsers } from "../controllers/adminController.js";

import { verifyAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/users", verifyAdmin, getAllUsers);

export default router;