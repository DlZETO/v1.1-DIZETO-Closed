import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DashNavbar from "./components/dashboard/navbar";
import DashJumbotron from "./components/dashboard/jumbotron";
import DashAbout from "./components/dashboard/about";
import DashPortfolio from "./components/dashboard/portfolio";

const root = ReactDOM.createRoot(document.getElementById("navbar"));
root.render(
  <React.StrictMode>
    <DashNavbar />
  </React.StrictMode>
);

const jumbotron = ReactDOM.createRoot(document.getElementById("jumbotron"));
jumbotron.render(
  <React.StrictMode>
    <DashJumbotron />
  </React.StrictMode>
);

const about = ReactDOM.createRoot(document.getElementById("about"));
about.render(
  <React.StrictMode>
    <DashAbout />
  </React.StrictMode>
);

const portfolio = ReactDOM.createRoot(document.getElementById("portfolio"));
portfolio.render(
  <React.StrictMode>
    <DashPortfolio />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
