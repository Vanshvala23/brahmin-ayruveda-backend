import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email"]
    },

    countryCode: {
      type: String,
      required: true,
      trim: true
    },

    phone: { 
      type: String, 
      required: true,
      validate: {
        validator: v => /^\d{10}$/.test(v),
        message: "Phone number must be exactly 10 digits"
      }
    },

    subject: {
      type: String,
      default: "General Inquiry"
    },

    message: { 
      type: String,
      required: true,
      minlength: 5
    }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
