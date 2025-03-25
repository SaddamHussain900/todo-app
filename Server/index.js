const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");

const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://saddambusiness247:M5kfTOZeyLAdkXjg@cluster0.dlpma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result)) // Removed console.log to correctly return the response
    .catch((err) => res.status(500).json(err)); // Added proper error status code
});
app.post("/todos", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    title: task.title,
    description: task.description,
    isCompleted: false, // Added isCompleted flag with initial value false
  })
    .then((result) => res.status(201).json(result)) // Return the created task
    .catch((err) => res.status(500).json(err)); // Return error with proper status code
});
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Todo deleted successfully" });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    })
    .catch((err) => res.status(500).json(err)); // Return error with proper status code
});
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body.task;
  TodoModel.findByIdAndUpdate(
    id,
    {
      title: updatedTask.title,
      description: updatedTask.description,
      isCompleted: updatedTask.isCompleted,
    },
    { new: true } // Return the updated document
  )
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    })
    .catch((err) => res.status(500).json(err)); // Return error with proper status code
});
app.listen(3001, () => {
  console.log("Server is Running");
});
