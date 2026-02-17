import Appointment from "../models/Appointment.js";
export const createAppointment = async (req, res) => {
  try {
    const { name, countryCode, phone, date, dept, doctor, message } = req.body;

    /* ========= VALIDATION ========= */

    if (!name || !phone || !date || !countryCode) {
      return res.status(400).json({
        msg: "Name, country code, phone and date are required",
      });
    }

    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({
        msg: "Phone must be exactly 10 digits",
      });
    }

    /* ========= DUPLICATE CHECK ========= */

    const existing = await Appointment.findOne({ phone, date });

    if (existing) {
      return res.status(409).json({
        msg: "You already have an appointment on this date",
      });
    }

    /* ========= CREATE ========= */

    const appointment = await Appointment.create({
      name: name.trim(),
      countryCode,
      phone,
      date,
      dept,
      doctor,
      message,
    });

    res.status(201).json({
      success: true,
      msg: "Appointment booked successfully",
      appointment,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      msg: "Server error",
    });
  }
};


export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
