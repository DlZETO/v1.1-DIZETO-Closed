import React from "react";
import Content from "./material/Content";

export default function About() {
  return (
    <>
      <section id="about" className="bg-white transition-all duration-500 dark:bg-dark">
        <h3 className="pt-5 text-center text-4xl font-semibold transition-all duration-500 dark:text-white">
          ABO<span className="text-red-600">UT</span>
        </h3>

        <div className="red-line-h"></div>

        <Content />
      </section>
    </>
  );
}
