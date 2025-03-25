import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const deleteTodo = async (id, dispatch) => {
  await axios
    .delete(`http://localhost:3001/todos/${id}`)
    .then((result) => {
      fetchTodos(dispatch);
    })
    .catch((err) => console.log(err));
};

export const fetchTodos = async (dispatch) => {
  await axios
    .get("http://localhost:3001/get")
    .then((result) => {
      dispatch(setTasks(result.data));
    })
    .catch((err) => console.log(err));
};

export const createTodo = (title, description, dispatch) => {
  axios
    .post("http://localhost:3001/todos", { task: { title, description } })
    .then((result) => fetchTodos(dispatch))
    .catch((err) => console.log(err));
};

export const updateTodo = (id, title, description, isCompleted, dispatch) => {
  axios
    .put(`http://localhost:3001/todos/${id}`, {
      task: { title, description, isCompleted },
    })
    .then((result) => fetchTodos(dispatch))
    .catch((err) => console.log(err));
};
