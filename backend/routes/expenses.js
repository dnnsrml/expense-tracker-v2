import express from "express";
import Expense from "../models/Expense.js";

// --SETUP ROUTER
const router = express.Router();

// --GET ALL EXPENSE ROUTE
router.get("/", async (req, res) => {
  try {
    const expenses = Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
