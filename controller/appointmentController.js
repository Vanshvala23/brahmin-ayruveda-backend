import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const { name, phone, date, dept, doctor, message } = req.body;

    if (!name || !phone || !date) {
      return res.status(400).json({ msg: "Required fields missing" });
    }

    const appointment = await Appointment.create({
      name,
      phone,
      date,
      dept,
      doctor,
      message
    });

    res.status(201).json({
      msg: "Appointment booked successfully",
      appointment
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
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
