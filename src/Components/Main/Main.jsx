import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AllTask from "../../Pages/All Tasks/AllTask";

import Completed from "../../Pages/Completed/Completed";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";

const Main = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="*" element={<Navigate to="/todos" />} />
        <Route path="/todos" element={<AllTask />} />

        <Route path="completed" element={<Completed />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default Main;
