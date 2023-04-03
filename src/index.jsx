import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ListPortfolio from "./pages/ListPortfolio";
import Sec00 from "./pages/Sec00";

const router = createBrowserRouter([
  {
    path: "/DIZETO-REACT",
    element: <App />,
  },
  {
    path: "/DIZETO-REACT/LIST",
    element: <ListPortfolio />,
  },
  {
    path: "/DIZETO-REACT/LIST/sec00",
    element: <Sec00 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
