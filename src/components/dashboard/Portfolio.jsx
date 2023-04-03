import React from "react";
import { Link } from "react-router-dom";

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
    <section id="portfolio" className="bg-white pb-2 md:pb-11">
      <h3 className="pt-2 md:pt-5 font-semibold text-4xl text-center">
        PORTFOL<span className="text-red-600">IO</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="flex justify-center">
        <Link
          className="my-4 py-2 px-10 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white"
          to="/DIZETO-REACT/LIST"
        >
          CHECK ALL PORTFOLIO
        </Link>
      </div>
      <div className="container mx-auto px-5">
        <ul className="dashboart-colum gap-4">
          {photos.map((photo, index) => (
            <li
              key={index}
              className="rounded-sm mb-4 border-2 border-gray-100 hover:border-red-600"
            >
              <div className="p-1">
                <a
                  href={require(`/src/assets/uploads/dashboard/f1/${photo}`).default}
                  data-lightbox="dashboart"
                  data-title="&copy; Copyright 2022 - DIZETO"
                >
                  <img
                    className="rounded-sm"
                    src={require(`/src/assets/uploads/dashboard/f1/thumbnail/${photo}`).default}
                    alt={photo}
                  />
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
