import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoading } from "./loginSlice";

export const taskListSlice = createSlice({
  name: "taskList",
  initialState: [],
  reducers: {
    setTasks: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTasks } = taskListSlice.actions;
export default taskListSlice.reducer;

export const deleteTodo = (id) => async (dispatch) => {
  await axios
    .delete(`http://localhost:3001/todos/${id}`)
    .then((result) => {
      dispatch(fetchTodos());
    })
    .catch((err) => console.log(err));
};

export const fetchTodos = () => async (dispatch) => {
  await axios
    .get("http://localhost:3001/todos")
    .then((result) => {
      dispatch(setTasks(result.data));
      dispatch(setLoading(false));
    })
    .catch((err) => console.log(err));
};

export const createTodo = (title, description) => async (dispatch) => {
  axios
    .post("http://localhost:3001/todos", { task: { title, description } })
    .then((result) => dispatch(fetchTodos()))
    .catch((err) => console.log(err));
};

export const updateTodo =
  (id, title, description, isCompleted) => async (dispatch) => {
    axios
      .put(`http://localhost:3001/todos/${id}`, {
        task: { title, description, isCompleted },
      })
      .then((result) => dispatch(fetchTodos()))
      .catch((err) => console.log(err));
  };
