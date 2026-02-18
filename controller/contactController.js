import Contact from "../models/Contacts.js";

// CREATE CONTACT
export const createContact = async (req, res) => {
  try {
    const { name, email, countryCode, phone, subject, message } = req.body;

    if (!name || !email || !countryCode || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled"
      });
    }

    const contact = await Contact.create({
      name,
      email,
      countryCode,
      phone,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL CONTACTS (Admin)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE CONTACT
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Message not found"
      });
    }

    res.json({
      success: true,
      message: "Message deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
