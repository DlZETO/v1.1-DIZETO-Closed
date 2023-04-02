import React from "react";
import { FaRegThumbsUp, FaBriefcase, FaUserAlt } from "react-icons/fa";

function Clients() {
  const checkTime = (time) => `0${time}`.slice(-2);

  const updateDate = () => {
    const date = new Date();
    const day = checkTime(date.getDate());
    const month = checkTime(date.getMonth() + 1);
    const year = date.getFullYear();
    document.getElementById("dttxt").innerHTML = `${day}/${month}/${year}`;
    setTimeout(updateDate, 500);
  };

  const updateTime = () => {
    const date = new Date();
    const hours = checkTime(date.getHours());
    const minutes = checkTime(date.getMinutes());
    const seconds = checkTime(date.getSeconds());
    document.getElementById(
      "tmtxt"
    ).innerHTML = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateTime, 500);
  };

  window.onload = () => {
    updateDate();
    updateTime();
  };
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
            <p className="text-red-600 font-semibold pb-1">
              <span id="dttxt"></span> - <span id="tmtxt"></span>
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
