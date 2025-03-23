import { createSlice } from "@reduxjs/toolkit";

export const isAdd = createSlice({
  name: "isAdd",
  initialState: { isAddTaskVisible: false },
  reducers: {
    setAddTaskVisibility: (state, { payload }) => {
      state.isAddTaskVisible = payload;
    },
  },
});

export const { setAddTaskVisibility } = isAdd.actions;

export default isAdd.reducer;
