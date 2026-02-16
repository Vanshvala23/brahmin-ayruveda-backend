import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// ✅ SIMPLE VERCEL-SAFE CORS
app.use(cors({
  origin: true, // allow all origins (safe for APIs)
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"],
}));

// ✅ Always respond OK to preflight
app.options("*", (req, res) => {
  res.sendStatus(200);
});

app.use(express.json());

connectDB();

app.use("/api/appointments", appointmentRoutes);

app.get("/", (req,res)=>{
  res.json({message:"API Running"});
});

export default app;
