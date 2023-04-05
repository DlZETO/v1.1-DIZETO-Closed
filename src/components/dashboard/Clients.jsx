import React from "react";
import { FaRegThumbsUp, FaBriefcase, FaUserAlt } from "react-icons/fa";
import DateTime from "./DateTime";

function Clients() {
  return (
    <section id="clients" className="bg-gray-100/50">
      <div className="container mx-auto px-5 py-12 flex items-center justify-center">
        <div className="mx-auto">
          <div className="flex items-center justify-center text-2xl">
            <i className="mr-2">
              <FaRegThumbsUp />
            </i>
            <p className="text-red-600 font-semibold pb-1">48</p>
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
            <p className="text-red-600 font-semibold pb-1">50</p>
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
            <p className="text-red-600 font-semibold pb-1">8</p>
          </div>
          <div className="text-center">
            <strong>Subscriber</strong>
          </div>
        </div>
        <div className="grey-line-v hidden md:block"></div>
        <div className="mx-auto hidden md:block">
          <div
            className="flex justify-center text-2xl"
            style={{ width: "250px" }}
          >
            <p className="flex items-center text-red-600 font-semibold pb-1">
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
