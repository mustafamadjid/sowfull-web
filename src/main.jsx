import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Router module
import { createBrowserRouter, RouterProvider } from "react-router";

// Toastify
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// CSS
import "./index.css";

// Components
import Home from "./pages/home/Home";

// Router path
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
