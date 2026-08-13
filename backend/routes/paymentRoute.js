import express from "express";
import {
  createOrder,
  verifyPayment,
  handleWebhook,
} from "../controllers/payment.controller.js";

const router = express.Router();

// Defined routes under /api/payments
router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);
router.post("/webhook", handleWebhook);

export default router;