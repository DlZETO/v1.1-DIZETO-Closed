import React from "react";
import ImageFallback from "../../../ImageFallback";

export default function Image() {
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
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {photos.map((photo, index) => (
        <li key={index} className="mb-4 transition-all duration-500 hover:drop-shadow-md-black dark:hover:drop-shadow-md-white">
          <div id="imgborder" className="rounded-sm border-2 border-gray-200 hover:border-red-600 dark:border-gray-700 dark:hover:border-red-600">
            <div className="p-1">
              <a href={require(`../../../../assets/uploads/dashboard/f1/${photo}`)} data-lightbox="dashboart" data-title="&copy; Copyright 2022 - DIZETO">
                <ImageFallback className="rounded-sm" src={require(`../../../../assets/uploads/dashboard/f1/thumbnail/${photo}`)} alt={photo} />
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
