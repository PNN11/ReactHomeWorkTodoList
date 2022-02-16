import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import TodolistPage from "../../pages/TodolistPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="todolist" element={<TodolistPage />} />
      <Route path="*" element={<Navigate to="todolist" />} />
    </Routes>
  );
};

export default PublicRoutes;
