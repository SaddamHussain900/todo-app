import { createSlice } from "@reduxjs/toolkit";

export const taskListSlice = createSlice({
  name: "taskList",
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      return action.payload;
    },
    addTask: (state, action) => {
      const { title, description } = action.payload;
      state.push({ id: Date.now(), title, description, isCompleted: false });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
  },
});

export const { addTask, removeTask, toggleComplete, editTask, setTasks } =
  taskListSlice.actions;
export default taskListSlice.reducer;
