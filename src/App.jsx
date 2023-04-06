import { useEffect } from "react";
import Preloader from "./components/Preloader";
import "./css/tailwind.css";
import "./css/style.css";
import "./css/lightbox.min.css";
import Merge from "./components/dashboard/Merge";
import Portfolio from "./components/dashboard/Portfolio";
import Pricing from "./components/dashboard/Pricing";
import Testimony from "./components/dashboard/Testimony";
import Clients from "./components/dashboard/Clients";
import ClientsImage from "./components/dashboard/ClientsImage";
import Contact from "./components/dashboard/Contact";
import Footer from "./components/Footer";

function Dashboard() {
  useEffect(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const bgtestimony = document.querySelector("#bgtestimony");
    body.classList.add("bg-img-dashboard");
    if (html.className === "dark") {
      body.setAttribute("style", "background-image: url(./background-dark.jpg);");
      bgtestimony.setAttribute("style", "background-image: url(./background-dark.jpg);");
    } else {
      body.setAttribute("style", "background-image: url(./background.jpg);");
      bgtestimony.setAttribute("style", "background-image: url(./background.jpg);");
    }

    return () => {
      body.classList.remove("bg-img-dashboard");
      body.removeAttribute("style");
      bgtestimony.removeAttribute("style");
    };
  }, []);

  return (
    <>
      <Preloader />
      <Merge />
      <Portfolio />
      <Pricing />
      <section id="bgtestimony" className="bg-img-testimony bg-scroll">
        <Testimony />
        <Clients />
        <ClientsImage />
      </section>
      <Contact />
      <Footer />
    </>
  );
}

export default Dashboard;
