import rateLimit from "express-rate-limit";

export const appointmentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per window
  message: {
    success: false,
    msg: "Too many bookings from this IP. Try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
