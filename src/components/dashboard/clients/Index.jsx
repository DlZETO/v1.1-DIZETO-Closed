import React from "react";
import { FaRegThumbsUp, FaBriefcase, FaUserAlt } from "react-icons/fa";
import Meter from "./material/Meter";
import DateTime from "./material/DateTime";

export default function Index() {
  return (
    <section id="clients" className="bg-gray-100/50 transition-all duration-500 dark:bg-dark/50 dark:text-white">
      <div className="container mx-auto flex items-center justify-center px-5 py-12">
        <Meter icon={<FaRegThumbsUp />} number="48" value="Happy Client" />
        <div className="grey-line-v"></div>
        <Meter icon={<FaBriefcase />} number="50" value="Completed Projects" />
        <div className="grey-line-v"></div>
        <Meter icon={<FaUserAlt />} number="8" value="Subscriber" />
        <div className="grey-line-v hidden md:block"></div>
        <DateTime />
      </div>
    </section>
  );
}
