import React from "react";
import { Link } from "react-router-dom";
import ImageFallback from "../ImageFallback";

function Portfolio() {
  const photos = [
    "DZT_CC77.jpg",
    "DZT_CC6.jpg",
    "DZT_CC83.jpg",
    "DZT_CC86.jpg",
    "DZT_CC44.jpg",
    "DZT_CC36.jpg",
    "DZT_CC74.jpg",
    "DZT_CC71.jpg",
    "DZT_CC93.jpg",
    "DZT_CC88.jpg",
    "DZT_CC89.jpg",
    "DZT_CC39.jpg",
  ];

  return (
    <section id="portfolio" className="bg-white pb-2 transition-all duration-500 dark:bg-dark md:pb-11">
      <h3 className="pt-2 text-center text-4xl font-semibold transition-all duration-500 dark:text-white md:pt-5">
        PORTFOL<span className="text-red-600">IO</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="flex justify-center">
        <Link className="my-4 border-2 border-red-600 px-10 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white" to="/list">
          CHECK ALL PORTFOLIO
        </Link>
      </div>
      <div className="container mx-auto px-5">
        <ul className="dashboart-colum gap-4">
          {photos.map((photo, index) => (
            <li id="imgborder" key={index} className="mb-4 rounded-sm border-2 border-gray-100 hover:border-red-600 dark:border-gray-700 dark:hover:border-red-600">
              <div className="p-1">
                <a href={require(`../../assets/uploads/dashboard/f1/${photo}`)} data-lightbox="dashboart" data-title="&copy; Copyright 2022 - DIZETO">
                  <ImageFallback className="rounded-sm" src={require(`../../assets/uploads/dashboard/f1/thumbnail/${photo}`)} alt={photo} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
