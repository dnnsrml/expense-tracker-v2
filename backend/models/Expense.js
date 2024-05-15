import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  note: { type: String, required: true },
  date: { type: Date, required: true },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
