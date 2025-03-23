import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AllTask from "../../Pages/All Tasks/AllTask";
import Today from "../../Pages/Today/Today";
import Upcoming from "../../Pages/Upcoming/Upcoming";
import Completed from "../../Pages/Completed/Completed";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";

const Main = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="*" element={<Navigate to="/todos" />} />
        <Route
          path="/todos"
          element={
            <AuthWrapper>
              <AllTask />
            </AuthWrapper>
          }
        />
        <Route path="today" element={<Today />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="completed" element={<Completed />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default Main;
