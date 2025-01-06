import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // Ensure HelmetProvider wraps the app
import "./index.css";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Home />
    </HelmetProvider>
  </React.StrictMode>
);
