import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    signup(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, signup } = loginSlice.actions;
export default loginSlice.reducer;
