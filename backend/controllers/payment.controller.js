import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

// Initialize Razorpay SDK instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Product database lookup
const PRODUCTS_DATABASE = {
  card_01: { name: "Low-power cleaning vehicle 0-01", price: 2000 },
  card_02: { name: "Mid-power cleaning vehicle 0-02", price: 5000 },
  card_03: { name: "High-power solar sweeper 0-03", price: 10000 },
  card_04: { name: "Industrial autonomous cleaner 0-04", price: 25000 },
};

// 1. Create Order Controller
export const createOrder = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = PRODUCTS_DATABASE[productId];

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    const options = {
      amount: product.price * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      notes: { productId, productName: product.name },
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      orderId: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ success: false, message: "Order creation failed" });
  }
};

// 2. Verify Payment Signature Controller
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: "Missing required parameters" });
    }

    const body = `${razorpay_order_id}\vert{}${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      // SUCCESS: Save transaction to database here
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      });
    }

    return res.status(400).json({ success: false, message: "Invalid signature verification" });
  } catch (error) {
    console.error("Verify Payment Error:", error);
    res.status(500).json({ success: false, message: "Verification process failed" });
  }
};

// 3. Webhook Listener Controller
export const handleWebhook = async (req, res) => {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers["x-razorpay-signature"];

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(JSON.stringify(req.body))
      .digest("hex");

    if (expectedSignature === signature) {
      const event = req.body.event;

      if (event === "payment.captured") {
        const payment = req.body.payload.payment.entity;
        console.log(`Webhook: Payment ${payment.id} captured successfully.`);
        // Mark order as completed in DB
      }

      return res.status(200).json({ status: "ok" });
    } else {
      return res.status(400).send("Invalid webhook signature");
    }
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(500).send("Webhook processing failed");
  }
};