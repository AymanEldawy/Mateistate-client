import React from "react";
import { Routes, Route } from "react-router-dom";
import { authProtectedRoutes } from "./routes";
const Index = () => {
  return (
    <Routes>
      {authProtectedRoutes.map((item) => (
        <Route path={item.path} element={item.component} />
      ))}
    </Routes>
  );
};

export default Index;
