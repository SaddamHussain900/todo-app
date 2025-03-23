import { createSlice } from "@reduxjs/toolkit";

export const isAdd = createSlice({
  name: "isAdd",
  initialState: {
    isAddTaskVisible: false,
    todo: {
      id: 0,
      title: "",
      description: "",
      isCompleted: false,
    },
    isEdit: false,
  },
  reducers: {
    setAddTaskVisibility: (state, { payload }) => {
      state.isAddTaskVisible = payload;
    },
    setEditTodo: (state, { payload }) => {
      state.todo = payload;
    },
    setEditModalVisibility: (state, { payload }) => {
      state.isEdit = payload;
    },
  },
});

export const { setAddTaskVisibility, setEditTodo, setEditModalVisibility } =
  isAdd.actions;

export default isAdd.reducer;
