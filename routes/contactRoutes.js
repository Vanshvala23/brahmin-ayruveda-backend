import express from "express";
import {
  createContact,
  getAllContacts,
  deleteContact
} from "../controller/contactController.js";

const router = express.Router();

// POST - send message
router.post("/", createContact);

// GET - admin read all messages
router.get("/", getAllContacts);

// DELETE - admin delete message
router.delete("/:id", deleteContact);

export default router;
