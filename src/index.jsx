import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./pages/Dashboard";
import ListPortfolio from "./pages/ListPortfolio";
import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/list",
    element: <ListPortfolio />,
  },
  {
    path: "/list/section/01",
    element: <Portfolio />,
  },
  {
    path: "/list/section/02",
    element: <Portfolio />,
  },
  {
    path: "/list/section/03",
    element: <Portfolio />,
  },
  {
    path: "/list/section/04",
    element: <Portfolio />,
  },
  {
    path: "/list/section/05",
    element: <Portfolio />,
  },
  {
    path: "/list/section/06",
    element: <Portfolio />,
  },
  {
    path: "/list/section/07",
    element: <Portfolio />,
  },
  {
    path: "/list/section/08",
    element: <Portfolio />,
  },
  {
    path: "/list/section/09",
    element: <Portfolio />,
  },
  {
    path: "/list/section/10",
    element: <Portfolio />,
  },
  {
    path: "/list/section/11",
    element: <Portfolio />,
  },
  {
    path: "/list/section/12",
    element: <Portfolio />,
  },
  {
    path: "/list/section/13",
    element: <Portfolio />,
  },
  {
    path: "/list/section/14",
    element: <Portfolio />,
  },
  {
    path: "/list/section/15",
    element: <Portfolio />,
  },
  {
    path: "/list/section/16",
    element: <Portfolio />,
  },
  {
    path: "/list/section/17",
    element: <Portfolio />,
  },
  {
    path: "/list/section/18",
    element: <Portfolio />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
