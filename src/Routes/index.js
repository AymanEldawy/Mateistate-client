import React from "react";
import { Route, Routes } from "react-router-dom";

import { authProtectedRoutes } from "./routes";

const Index = () => {
  return (
    <Routes>
      {authProtectedRoutes.map((item) => (
        <Route path={item.path} element={item.component} key={item.path}/>
      ))}
    </Routes>
  );
};

export default Index;
