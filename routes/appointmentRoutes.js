import express from "express";
import { createAppointment, getAppointments } from "../controller/appointmentController.js";
import { appointmentLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/",appointmentLimiter, createAppointment);
router.get("/", getAppointments);

export default router;
