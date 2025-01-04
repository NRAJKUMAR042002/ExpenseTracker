const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/ExpenseTracker", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

  const DataSchema = new mongoose.Schema({
    type: {type:String,require:true},
    amount: {type:Number,require:true},
    category: {type:String,require:true},
    description: {type:String,require:true},
    tags: {type:String},
    paymentmethod: {type:String,require:true},
    priority: {type:String,require:true},
    tax: {type:String},
    location: {type:String,require:true},
  });

  const monthlyTransactionSchema = new mongoose.Schema({
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

  const DataModel = mongoose.model("Data", DataSchema);
  const MonthlyTransaction = mongoose.model("MonthlyTransaction", monthlyTransactionSchema);

  app.post("/api/DailyTransaction", async (req, res) => {
    try {
      const formData = new DataModel(req.body);
      await formData.save();
      res.status(201).json({ message: "Data saved successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Failed to save data", error });
    }
  });

  app.get("/api/DailyTransaction", async (req, res) => {
    try {
      const allData = await DataModel.find();
      res.status(200).json(allData);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch data", error });
    }
  });

  // Monthly Transaction Routes
app.post("/api/MonthlyTransaction", async (req, res) => {
  try {
    const transaction = new MonthlyTransaction(req.body);
    await transaction.save();
    res.status(200).json({ message: "Monthly transaction saved successfully!" });
  } catch (error) {
    console.error("Error saving monthly transaction:", error);
    res.status(500).json({ message: "Failed to save monthly transaction." });
  }
});

app.get("/api/MonthlyTransaction", async (req, res) => {
  try {
    const transactions = await MonthlyTransaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error("Error fetching monthly transactions:", error);
    res.status(500).json({ message: "Failed to fetch monthly transactions." });
  }
});


  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });



 