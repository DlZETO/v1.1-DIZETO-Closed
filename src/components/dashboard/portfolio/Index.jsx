import React from "react";
import { Link } from "react-router-dom";
import Image from "./material/Image";

export default function Index() {
  return (
    <section id="portfolio" className="bg-white pb-20 transition-all duration-500 dark:bg-dark">
      <div className="container mx-auto px-5">
        <h3 className="pt-5 text-center text-4xl font-semibold transition-all duration-500 dark:text-white">
          PORTFOL<span className="text-red-600">IO</span>
        </h3>

        <div className="red-line-h"></div>

        <div className="my-5 flex items-center justify-center">
          <Link className="border-2 border-red-600 px-10 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white" to="/list">
            CHECK ALL PORTFOLIO
          </Link>
        </div>

        <Image />
      </div>
    </section>
  );
}
