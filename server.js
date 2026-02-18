import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ===== CORS FIRST =====
app.use(cors({
  origin: [
    "https://brahmiayurveda.com",
    "http://localhost:5173",
    "http://localhost:3000"
  ],
  credentials: true
}));

app.use(express.json());

// ===== ROUTES =====
app.use("/api/appointments", appointmentRoutes);
app.use("/api/contact",contactRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API Running" });
});

// ===== CONNECT DB ONCE =====
connectDB();

export default app;
