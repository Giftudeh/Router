import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rootpage from "./pages/rootpage";
import About from "./pages/about"; 
import Contact from "./pages/contact";
import Services from "./pages/services"

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
