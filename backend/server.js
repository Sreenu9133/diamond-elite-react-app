// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import bcrypt from "bcrypt";
// import Razorpay from "razorpay";
// import db from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import adminRoutes from "./routes/adminRoute.js";
// import paymentRoutes from "./routes/paymentRoute.js";
// dotenv.config();
// const PORT = process.env.PORT
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/payments", paymentRoutes);

// app.listen(process.env.PORT, () => {
//     console.log(`Server Running on ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import Razorpay from "razorpay";
import db from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import paymentRoutes from "./routes/paymentRoute.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/payments", paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});