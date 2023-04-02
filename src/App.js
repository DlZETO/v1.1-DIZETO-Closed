import React from "react";
import "./css/tailwind.css";
import "./css/style.css";
import "./css/lightbox.min.css";
import Merge from "./components/dashboard/Merge";
import Portfolio from "./components/dashboard/Portfolio";
import Pricing from "./components/dashboard/Pricing";
import Testimony from "./components/dashboard/Testimony";
import Clients from "./components/dashboard/Clients";
import ClientsIMG from "./components/dashboard/ClientsIMG";
import Contact from "./components/dashboard/Contact";
import Footer from "./components/Footer";

function Dashboard() {
  const body = document.getElementById("body");
  body.setAttribute("class", "bg-img-dashboard");
  return (
    <>
      <Merge />
      <Portfolio />
      <Pricing />
      <section className="bg-img-testimony bg-scroll">
        <Testimony />
        <Clients />
        <ClientsIMG />
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Dashboard;
