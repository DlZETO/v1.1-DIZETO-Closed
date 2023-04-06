import React from "react";

export default function Package({ pack, ttl, lst }) {
  return (
    <ul className="mt-28 w-full rounded-md border bg-white text-center text-xl font-semibold transition-all duration-500 hover:scale-105 hover:drop-shadow-xl dark:border-gray-700 dark:bg-dark dark:text-white dark:hover:drop-shadow-md-white lg:mt-16">
      <li className="bg-gray-100 transition-all duration-500 dark:bg-gray-700">
        <div className="relative top-[-10px] mt-[-63px] inline-block h-[140px] w-[140px] rounded-full border-[5px] border-gray-100 bg-[#e83333] text-white transition-all duration-500 dark:border-gray-700">
          <div className="mt-[34px] text-3xl font-semibold">IDR ??</div>
          <div className="text-base font-semibold">PACKAGE {pack}</div>
        </div>
        {ttl}
      </li>
      {lst}
      <li className="mb-5 text-base">
        SENT VIA
        <br />
        GOOGLE DRIVE
        <br />
        (EXPIRED <span className="font-bold text-red-600">7</span> DAYS)
      </li>
      <button className="mb-5 border-2 border-red-600 px-5 py-2 text-base font-semibold text-red-600 hover:bg-red-600 hover:text-white hover:drop-shadow-xl">CHECK PRICE</button>
    </ul>
  );
}
