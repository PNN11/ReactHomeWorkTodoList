import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import TodolistPage from "../pages/TodolistPage";
import { getSlice } from "../store/todo";

const AppRouter = () => {
  const { currentUser } = useSelector(getSlice);

  return (
    <Routes>
      {!currentUser && <Route path="login" element={<LoginPage />} />}
      {!currentUser && <Route path="register" element={<RegisterPage />} />}
      {currentUser && <Route path="todolist" element={<TodolistPage />} />}
      {currentUser && <Route path="*" element={<Navigate to="todolist" />} />}
      {!currentUser && <Route path="*" element={<Navigate to="login" />} />}
    </Routes>
  );
};

export default AppRouter;
