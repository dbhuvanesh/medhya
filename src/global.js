import React from "react";
import { createRoot } from "react-dom/client";
import HomeScreen from "./pages/Homescreen.jsx";
import "../src/stylesheets/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const container = document.querySelector(".root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  </Router>
);