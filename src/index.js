import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DashNavbar from "./components/dashboard/navbar";
import DashJumbotron from "./components/dashboard/jumbotron";
import DashAbout from "./components/dashboard/about";
import DashPortfolio from "./components/dashboard/portfolio";
import DashPricing from "./components/dashboard/pricing";
import DashTestimony from "./components/dashboard/testimony";
import DashClients from "./components/dashboard/clients";
import DashClientsIMG from "./components/dashboard/clientsimg";
import DashContact from "./components/dashboard/contact";
import Footer from "./components/footer";

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

const pricing = ReactDOM.createRoot(document.getElementById("pricing"));
pricing.render(
  <React.StrictMode>
    <DashPricing />
  </React.StrictMode>
);

const testimony = ReactDOM.createRoot(document.getElementById("testimony"));
testimony.render(
  <React.StrictMode>
    <DashTestimony />
  </React.StrictMode>
);

const clients = ReactDOM.createRoot(document.getElementById("clients"));
clients.render(
  <React.StrictMode>
    <DashClients />
  </React.StrictMode>
);

const contact = ReactDOM.createRoot(document.getElementById("contact"));
contact.render(
  <React.StrictMode>
    <DashContact />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

const clientsimg = ReactDOM.createRoot(document.getElementById("clientsIMG"));
clientsimg.render(
  <React.StrictMode>
    <DashClientsIMG />
  </React.StrictMode>
);

reportWebVitals();
