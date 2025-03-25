const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const TodoModel = mongoose.model("todos", TodoSchema);
module.exports = TodoModel;
