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
import Article1 from "./pages/Articles/Article_1";
import Article2 from "./pages/Articles/Article_2";
import Katalog from "./pages/Katalog/Katalog";
import TanamanSaya from "./pages/TanamanSaya/TanamanSaya";

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
  {
    path: "/article/1",
    element: <Article1 />,
  },
  {
    path: "/article/2",
    element: <Article2 />,
  },
  {
    path: "/katalog",
    element: <Katalog />,
  },
  {
    path: "/tanamansaya",
    element: <TanamanSaya />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
