import React from "react";
import { Link as Scroll } from "react-scroll";
import NavButton from "./material/NavButton";

export default function index() {
  return (
    <nav className="fixed top-0 z-10 w-full">
      <div className="flex items-center px-10 py-4">
        <Scroll className="cursor-pointer" to="top" spy={true} smooth={true} offset={-67} duration={500}>
          <img className="pb-1.5" src={require("../../../assets/images/logo/dizeto.svg").default} alt="Dizeto Navbar" height={36} width={36} />
        </Scroll>
        <div className="mx-auto hidden md:block">
          <ul className="flex text-base font-semibold">
            <NavButton value="About" to="about" />
            <NavButton value="Portfolio" to="portfolio" />
            <NavButton value="Pricing" to="pricing" />
            <NavButton value="Testimony" to="testimony" />
            <NavButton value="Clients" to="clients" />
            <NavButton value="Contact" to="contact" />
          </ul>
        </div>
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
