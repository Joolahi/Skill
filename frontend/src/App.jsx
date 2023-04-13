import "./App.css";
import "@babel/core"
import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { history } from "./helpers/history";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AdminBoard from "./components/AdminBoard";
import SoftSkills from "./components/softskills";
import { setAuthToken } from "./helpers/setAuthToken";

export default function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminBoard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/softskills" element={<SoftSkills />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
