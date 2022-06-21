import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard.js";
import Login from "./pages/Login.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}
