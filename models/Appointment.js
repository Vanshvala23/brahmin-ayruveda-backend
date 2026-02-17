import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true 
    },

    countryCode: {
      type: String,
      required: true
    },

    phone: { 
      type: String, 
      required: true,
      validate: {
        validator: function(v) {
          return /^\d{10}$/.test(v); // exactly 10 digits
        },
        message: "Phone number must be exactly 10 digits"
      }
    },

    date: { 
      type: String, 
      required: true 
    },

    dept: { type: String },
    doctor: { type: String },
    message: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
