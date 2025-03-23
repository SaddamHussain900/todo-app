import { createSlice } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ?? null,
  isLoggedIn: !!user,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
    signup(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, signup } = loginSlice.actions;
export default loginSlice.reducer;
