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
    <nav id="navbar" className="fixed top-0 z-10 flex h-[63px] w-full items-center px-10 transition-all duration-500 dark:text-white">
      <Scroll className="flex h-9 w-9 cursor-pointer items-center justify-center" to="jumbotron" spy={true} smooth={true} offset={-63} duration={500}>
        <img src={require("../../../assets/images/logo/dizeto.svg").default} alt="Dizeto Navbar" height={33} width={33} />
      </Scroll>

      <div className="mx-auto">
        <ul className="flex flex-row gap-x-8 text-base font-semibold">
          <NavLink value="About" to="about" />
          <NavLink value="Portfolio" to="portfolio" />
          <NavLink value="Pricing" to="pricing" />
          <NavLink value="Testimony" to="testimony" />
          <NavLink value="Clients" to="clients" />
          <NavLink cls="hidden md:block" value="Contact" to="contact" />
        </ul>
      </div>

      <NavMode />
    </nav>
  );
}
