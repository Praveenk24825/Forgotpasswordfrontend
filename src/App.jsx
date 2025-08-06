import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home"
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
    </Routes>
  );
}
