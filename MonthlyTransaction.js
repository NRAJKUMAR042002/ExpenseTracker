const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = "mongodb://localhost:27017/transactionsDB"; // Update the URI for your database
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Mongoose Schema and Model
const transactionSchema = new mongoose.Schema({
  fromdate: String,
  todate: String,
  type: String,
  amount: Number,
  category: String,
  description: String,
  tags: String,
  paymentmethod: String,
  priority: String,
  tax: String,
  receipt: String,
  location: String,
  date: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

// API Routes
app.post("/api/MonthlyTransaction", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(200).json({ message: "Transaction saved successfully!" });
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ message: "Failed to save transaction." });
  }
});

app.get("/api/MonthlyTransaction", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Failed to fetch transactions." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
