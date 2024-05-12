import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertySpecs from "./components/PropertySpecs.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/properties/:propertyId",
    element: <PropertySpecs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
