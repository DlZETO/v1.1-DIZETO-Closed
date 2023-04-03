import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ListPortfolio from "./pages/ListPortfolio";
import Sec01 from "./pages/Sec01";

const router = createBrowserRouter([
  {
    path: "/DIZETO-REACT",
    element: <App />,
  },
  {
    path: "/DIZETO-REACT/list",
    element: <ListPortfolio />,
  },
  {
    path: "/DIZETO-REACT/list/sec01",
    element: <Sec01 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
