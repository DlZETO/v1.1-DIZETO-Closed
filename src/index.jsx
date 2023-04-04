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
  {
    path: "/DIZETO-REACT/list/sec02",
    element: <Sec02 />,
  },
  {
    path: "/DIZETO-REACT/list/sec03",
    element: <Sec03 />,
  },
  {
    path: "/DIZETO-REACT/list/sec04",
    element: <Sec04 />,
  },
  {
    path: "/DIZETO-REACT/list/sec05",
    element: <Sec05 />,
  },
  {
    path: "/DIZETO-REACT/list/sec06",
    element: <Sec06 />,
  },
  {
    path: "/DIZETO-REACT/list/sec07",
    element: <Sec07 />,
  },
  {
    path: "/DIZETO-REACT/list/sec08",
    element: <Sec08 />,
  },
  {
    path: "/DIZETO-REACT/list/sec09",
    element: <Sec09 />,
  },
  {
    path: "/DIZETO-REACT/list/sec10",
    element: <Sec10 />,
  },
  {
    path: "/DIZETO-REACT/list/sec11",
    element: <Sec11 />,
  },
  {
    path: "/DIZETO-REACT/list/sec12",
    element: <Sec12 />,
  },
  {
    path: "/DIZETO-REACT/list/sec13",
    element: <Sec13 />,
  },
  {
    path: "/DIZETO-REACT/list/sec14",
    element: <Sec14 />,
  },
  {
    path: "/DIZETO-REACT/list/sec15",
    element: <Sec15 />,
  },
  {
    path: "/DIZETO-REACT/list/sec16",
    element: <Sec16 />,
  },
  {
    path: "/DIZETO-REACT/list/sec17",
    element: <Sec17 />,
  },
  {
    path: "/DIZETO-REACT/list/sec18",
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
