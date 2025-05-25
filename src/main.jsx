import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Router module
import { createBrowserRouter, RouterProvider } from "react-router";

// Toastify
import "react-toastify/dist/ReactToastify.css";


// CSS
import "./index.css";

// Components
import Home from "./pages/home/Home";
import Articles from "./pages/Articles/Articles";

// Router path
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
