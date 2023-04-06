import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function NavMode() {
  function mode() {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const bgtestimony = document.querySelector("#bgtestimony");
    const imgborder = document.querySelectorAll("#imgborder");

    if (html.className == "dark") {
      imgborder.forEach((item) => item.classList.add("transition-all", "duration-500"));

      html.classList.remove("dark");

      setTimeout(() => {
        body.setAttribute("style", "background-image: url(./background.jpg);");
        bgtestimony.setAttribute("style", "background-image: url(./background.jpg);");
      }, 120);

      setTimeout(() => {
        imgborder.forEach((item) => item.classList.remove("transition-all", "duration-500"));
      }, 550);
    } else {
      imgborder.forEach((item) => item.classList.add("transition-all", "duration-500"));

      html.classList.add("dark");

      setTimeout(() => {
        body.setAttribute("style", "background-image: url(./background-dark.jpg);");
        bgtestimony.setAttribute("style", "background-image: url(./background-dark.jpg);");
      }, 120);

      setTimeout(() => {
        imgborder.forEach((item) => item.classList.remove("transition-all", "duration-500"));
      }, 550);
    }
  }

  return (
    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-white/0 transition-all duration-250 dark:text-white" onClick={mode}>
      <BsFillSunFill className="block transition-all duration-500 dark:hidden" />
      <BsFillMoonFill className="hidden transition-all duration-500 dark:block" />
    </div>
  );
}
