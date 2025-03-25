const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");
const UserModel = require("./Models/User"); // Import User model
const bcrypt = require("bcrypt"); // For password hashing
const jwt = require("jsonwebtoken"); // For token generation

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

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body; // Added name
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    }); // Include name
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json(err);
    }
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" }); // Generate token
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3001, () => {
  console.log("Server is Running");
});
