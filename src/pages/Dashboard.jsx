import "../css/tailwind.css";
import "../css/style.css";
import "../css/lightbox.min.css";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/dashboard/navbar/Index";
import Jumbotron from "../components/dashboard/Jumbotron";
import About from "../components/dashboard/about/Index";
import Portfolio from "../components/dashboard/portfolio/Index";
import Pricing from "../components/dashboard/pricing/Index";
import Testimony from "../components/dashboard/testimony/Index";
import Clients from "../components/dashboard/clients/Index";
import ClientsImage from "../components/dashboard/ClientsImage";
import Contact from "../components/dashboard/Contact";
import Footer from "../components/Footer";

export default function Dashboard() {
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
      <Loading />
      <Navbar />
      <Jumbotron />
      <About />
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
