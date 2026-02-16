import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ================= CORS FIRST =================
app.use(cors({
  origin: [
    "https://brahmiayurveda.com",
    "http://localhost:5173",
    "http://localhost:3000"
  ],
  credentials: true,methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Authorization"],
  maxAge: 86400 
}));

// Handle preflight requests
app.options("*", cors());

// ================= MIDDLEWARE =================
app.use(express.json());

// ================= DB CONNECT =================
connectDB();

// ================= ROUTES =================
app.use("/api/appointments", appointmentRoutes);

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.json({ message: "API Running" });
});

export default app;
