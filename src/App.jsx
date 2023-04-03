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
import ClientsIMG from "./components/dashboard/ClientsIMG";
import Contact from "./components/dashboard/Contact";
import Footer from "./components/Footer";

function Dashboard() {
  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("bg-img-dashboard");

    return () => {
      body.classList.remove("bg-img-dashboard");
    };
  }, []);

  return (
    <>
      <Preloader />
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
