import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ListPortfolio from "./pages/ListPortfolio";
import Sec01 from "./pages/Sec01";
import Sec02 from "./pages/Sec02";
import Sec03 from "./pages/Sec03";
import Sec04 from "./pages/Sec04";
import Sec05 from "./pages/Sec05";
import Sec06 from "./pages/Sec06";
import Sec07 from "./pages/Sec07";
import Sec08 from "./pages/Sec08";
import Sec09 from "./pages/Sec09";
import Sec10 from "./pages/Sec10";
import Sec11 from "./pages/Sec11";
import Sec12 from "./pages/Sec12";
import Sec13 from "./pages/Sec13";
import Sec14 from "./pages/Sec14";
import Sec15 from "./pages/Sec15";
import Sec16 from "./pages/Sec16";
import Sec17 from "./pages/Sec17";
import Sec18 from "./pages/Sec18";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <ListPortfolio />,
  },
  {
    path: "/list/sec01",
    element: <Sec01 />,
  },
  {
    path: "/list/sec02",
    element: <Sec02 />,
  },
  {
    path: "/list/sec03",
    element: <Sec03 />,
  },
  {
    path: "/list/sec04",
    element: <Sec04 />,
  },
  {
    path: "/list/sec05",
    element: <Sec05 />,
  },
  {
    path: "/list/sec06",
    element: <Sec06 />,
  },
  {
    path: "/list/sec07",
    element: <Sec07 />,
  },
  {
    path: "/list/sec08",
    element: <Sec08 />,
  },
  {
    path: "/list/sec09",
    element: <Sec09 />,
  },
  {
    path: "/list/sec10",
    element: <Sec10 />,
  },
  {
    path: "/list/sec11",
    element: <Sec11 />,
  },
  {
    path: "/list/sec12",
    element: <Sec12 />,
  },
  {
    path: "/list/sec13",
    element: <Sec13 />,
  },
  {
    path: "/list/sec14",
    element: <Sec14 />,
  },
  {
    path: "/list/sec15",
    element: <Sec15 />,
  },
  {
    path: "/list/sec16",
    element: <Sec16 />,
  },
  {
    path: "/list/sec17",
    element: <Sec17 />,
  },
  {
    path: "/list/sec18",
    element: <Sec18 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
