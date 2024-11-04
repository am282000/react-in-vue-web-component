import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../dist/my-web-component.js"; // To run on React Local

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
