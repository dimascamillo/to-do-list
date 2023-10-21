import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import "./global.css";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
