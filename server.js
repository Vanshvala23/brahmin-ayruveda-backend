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


export default app;
