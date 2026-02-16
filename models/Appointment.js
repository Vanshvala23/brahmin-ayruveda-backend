import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true },
    dept: { type: String },
    doctor: { type: String },
    message: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
