import React from "react";
import { FaRegThumbsUp, FaBriefcase, FaUserAlt } from "react-icons/fa";
import DateTime from "./DateTime";

function Clients() {
  return (
    <section id="clients" className="bg-gray-100/50 transition-all duration-500 dark:bg-dark/50 dark:text-white">
      <div className="container mx-auto flex items-center justify-center px-5 py-12">
        <div className="mx-auto">
          <div className="flex items-center justify-center text-2xl">
            <i className="mr-2">
              <FaRegThumbsUp />
            </i>
            <p className="pb-1 font-semibold text-red-600">48</p>
          </div>
          <div className="text-center">
            <strong>Happy Client</strong>
          </div>
        </div>
        <div className="grey-line-v"></div>
        <div className="mx-auto">
          <div className="flex items-center justify-center text-2xl">
            <i className="mr-2">
              <FaBriefcase />
            </i>
            <p className="pb-1 font-semibold text-red-600">50</p>
          </div>
          <div className="text-center">
            <strong>Completed Projects</strong>
          </div>
        </div>
        <div className="grey-line-v"></div>
        <div className="mx-auto">
          <div className="flex items-center justify-center text-2xl">
            <i className="mr-2">
              <FaUserAlt />
            </i>
            <p className="pb-1 font-semibold text-red-600">8</p>
          </div>
          <div className="text-center">
            <strong>Subscriber</strong>
          </div>
        </div>
        <div className="grey-line-v hidden md:block"></div>
        <div className="mx-auto hidden md:block">
          <div className="flex justify-center text-2xl" style={{ width: "250px" }}>
            <p className="flex items-center pb-1 font-semibold text-red-600">
              <DateTime />
            </p>
          </div>
          <div className="text-center">
            <strong>Date - Time</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
