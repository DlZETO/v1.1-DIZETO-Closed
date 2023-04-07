import React from "react";

export default function Person({ name, status, comment, source }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src={source} className="h-32 w-32 rounded-full" alt="Testimony" />
      </div>
      <br />
      <div className="text-center">
        <strong className="text-lg">{name}</strong>
        <p className="text-sm font-semibold text-gray-700 transition-all duration-500 dark:text-white">{status}</p>
        <br />
        <p className="text-base font-semibold">"{comment}"</p>
      </div>
    </div>
  );
}
