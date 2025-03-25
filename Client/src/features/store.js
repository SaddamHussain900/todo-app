import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./slices/taskListSlice";
import isAddReducer from "./slices/isAdd";
import loginReducer from "./slices/loginSlice";

export default configureStore({
  reducer: {
    taskList: taskListReducer,
    isAdd: isAddReducer,
    login: loginReducer,
  },
});
