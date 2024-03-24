import React from "react";
import "medhya/css/medhya.css";
import { createRoot } from "react-dom/client";
const container = document.querySelector(".root");
const root = createRoot(container);
root.render(
  <>
    <h1 className="title">medhyadocs</h1>
  </>
);
