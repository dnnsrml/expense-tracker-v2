import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expenseRoutes from "./routes/expenses.js";

// --SETUP DOTENV
dotenv.config();

// --SETUP EXPRESS
const app = express();

// --SETUP MIDDLEWARES
app.use(cors());
app.use(express.json());

// --CONNECT TO MONGODB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("connected to MongoDB.."))
  .catch((err) => console.log(err));

// --DEFINE ROUTES
app.use("/api/expenses", expenseRoutes);

// --START THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
