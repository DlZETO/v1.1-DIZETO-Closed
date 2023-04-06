import React from "react";
import { Link as Scroll } from "react-scroll/modules";

export default function NavButton({ cls, value, to }) {
  return (
    <li className={`hover:text-red-600 ${cls}`}>
      <Scroll className="cursor-pointer" to={to} spy={true} smooth={true} offset={-63} duration={500}>
        {value}
      </Scroll>
    </li>
  );
}
