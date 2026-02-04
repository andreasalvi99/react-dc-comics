import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//?? Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

// ?? CSS
import "./assets/css/index.css";

// ?? Components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
