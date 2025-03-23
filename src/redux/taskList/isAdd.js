import { createSlice } from "@reduxjs/toolkit";
export const isAdd = createSlice({
  name: "isAdd",
  initialState: false,
  reducers: {
    Add: (state) => {
      return !state;
    },
  },
});
export const { Add } = isAdd.actions;
export default isAdd.reducer;
