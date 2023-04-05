import React from "react";
import { Link as Scroll } from "react-scroll/modules";

export default function NavButton({ value, to }) {
  return (
    <li className="text-black hover:text-red-600">
      <Scroll className="cursor-pointer px-4" to={to} spy={true} smooth={true} offset={-67} duration={500}>
        {value}
      </Scroll>
    </li>
  );
}
