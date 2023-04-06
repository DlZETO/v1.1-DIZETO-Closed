import React, { useState, useEffect } from "react";
import { BsFillCircleFill, BsQuote } from "react-icons/bs";

export default function Index() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".tmslider");
    const dots = document.querySelectorAll(".icon-dot");

    if (slides.length === 0 || dots.length === 0) {
      console.error("Elemen tidak ditemukan!");
      return;
    }

    const showSlide = () => {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].classList.add("hidden");
        dots[i].classList.remove("active");
      }

      slides[index].style.opacity = 1;
      slides[index].classList.remove("hidden");
      dots[index].classList.add("active");
      setIndex((index + 1) % slides.length);
    };

    const intervalId = setInterval(showSlide, 3000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <section className="transition-all duration-500 dark:text-white" id="testimony">
      <div className="container mx-auto px-5">
        <i className="text-5xl">
          <BsQuote />
        </i>
        <div className="tmslider block">
          <div className="flex items-center justify-center py-5">
            <img src={require("../../../assets/images/testimony/person.jpg")} className="w-32 rounded-full" alt="Testimony" />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700 transition-all duration-500 dark:text-white">Status</p>
            <p className="pt-4 text-base font-semibold">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img src={require("../../../assets/images/testimony/person.jpg")} className="w-32 rounded-full" alt="Testimony" />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700 transition-all duration-500 dark:text-white">Status</p>
            <p className="pt-4 text-base font-semibold">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img src={require("../../../assets/images/testimony/person.jpg")} className="w-32 rounded-full" alt="Testimony" />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700 transition-all duration-500 dark:text-white">Status</p>
            <p className="pt-4 text-base font-semibold">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img src={require("../../../assets/images/testimony/person.jpg")} className="w-32 rounded-full" alt="Testimony" />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700 transition-all duration-500 dark:text-white">Status</p>
            <p className="pt-4 text-base font-semibold">"Comment"</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <i>
            <BsFillCircleFill className="icon-dot active mb-16 mt-10 text-red-600/30" size={"12px"} />
          </i>
          <i>
            <BsFillCircleFill className="icon-dot mb-16 mt-10 text-red-600/30" style={{ marginLeft: "15px" }} size={"12px"} />
          </i>
          <i>
            <BsFillCircleFill className="icon-dot mb-16 mt-10 text-red-600/30" style={{ marginLeft: "15px" }} size={"12px"} />
          </i>
          <i>
            <BsFillCircleFill className="icon-dot mb-16 mt-10 text-red-600/30" style={{ marginLeft: "15px" }} size={"12px"} />
          </i>
        </div>
      </div>
    </section>
  );
}
