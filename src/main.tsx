import React from "react";
import ReactDOM from "react-dom/client";
import Base from "./pages/base/base.tsx";
import "./global/normalize.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Base />
  </React.StrictMode>
);
