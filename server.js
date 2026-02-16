import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/appointments", appointmentRoutes);

// DB Connect
connectDB();
// CORS Configuration
app.use(cors({
  origin: [
    "https://brahmiayurveda.com",
    "http://localhost:5173",  // For local development
    "http://localhost:3000"   // Alternative local port
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Authorization"],
  maxAge: 86400 // 24 hours
}));


export default app;
