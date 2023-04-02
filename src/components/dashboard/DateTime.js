import React, { useState, useEffect } from "react";

const checkTime = (time) => `0${time}`.slice(-2);

const DateTime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const updateDate = () => {
    const date = new Date();
    const day = checkTime(date.getDate());
    const month = checkTime(date.getMonth() + 1);
    const year = date.getFullYear();
    setDate(`${day}/${month}/${year}`);
  };

  const updateTime = () => {
    const date = new Date();
    const hours = checkTime(date.getHours());
    const minutes = checkTime(date.getMinutes());
    const seconds = checkTime(date.getSeconds());
    setTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateDate();
      updateTime();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span>{date}</span> - <span>{time}</span>
    </>
  );
};

export default DateTime;
