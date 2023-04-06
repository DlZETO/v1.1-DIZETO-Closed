import React, { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import NavLink from "./material/NavLink";
import NavMode from "./material/NavMode";

export default function Index() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const about = document.getElementById("about");
    if (scrollPosition > 200) {
      if (scrollPosition > about.offsetTop - 64) {
        navbar.classList.add("dark:bg-dark/70", "drop-shadow-md", "backdrop-blur");
      } else {
        navbar.classList.remove("dark:bg-dark/70", "drop-shadow-md", "backdrop-blur");
      }
    }
  }, [scrollPosition]);
  return (
    <nav id="navbar" className="fixed top-0 z-10 w-full transition-all duration-500 dark:text-white">
      <div className="flex items-center px-10 py-2">
        <Scroll className="cursor-pointer" to="top" spy={true} smooth={true} offset={-63} duration={500}>
          <img className="pb-1.5" src={require("../../../assets/images/logo/dizeto.svg").default} alt="Dizeto Navbar" height={36} width={36} />
        </Scroll>
        <div className="mx-auto hidden md:block">
          <ul className="flex text-base font-semibold">
            <NavLink value="About" to="about" />
            <NavLink value="Portfolio" to="portfolio" />
            <NavLink value="Pricing" to="pricing" />
            <NavLink value="Testimony" to="testimony" />
            <NavLink value="Clients" to="clients" />
            <NavLink value="Contact" to="contact" />
          </ul>
        </div>
        <NavMode />
        <div className="ml-auto block items-center md:hidden">
          <button id="hamburger" className="rounded-lg pt-1.5 hover:text-red-600">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
