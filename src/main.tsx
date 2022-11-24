import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Signup from "./Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
