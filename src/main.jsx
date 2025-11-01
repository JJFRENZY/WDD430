import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";       // <-- relative path within src
import "./styles.css";         // <-- load CSS once here

console.log("[main] booting…");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
