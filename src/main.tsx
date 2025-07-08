// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // RESULTS IN PAGES BEING LOADED TWICE; DUE TO USE EFFECT RUNNING TWICE;
  // <StrictMode>
  <App />
  // </StrictMode>,
);
