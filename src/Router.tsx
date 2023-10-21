import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Route>
    </Routes>
  );
}
