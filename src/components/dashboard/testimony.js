import React from "react";
import { BsFillCircleFill, BsQuote } from "react-icons/bs";

function Testimony() {
  return (
    <section id="testimony">
      <div className="container mx-auto px-5">
        <div className="pt-12">
          <i className="text-5xl">
            <BsQuote className="mx-auto" />
          </i>
        </div>
        <div className="tmslider block">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="tmslider hidden">
          <div className="flex items-center justify-center py-5">
            <img
              src="asset/images/testimony/person.jpg"
              className="w-32 rounded-full"
              alt="Testimony"
            />
          </div>
          <div className="text-center">
            <strong className="text-lg">Name</strong>
            <p className="text-sm font-semibold text-gray-700">Status</p>
            <p className="text-base font-semibold pt-4">"Comment"</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <i>
            <BsFillCircleFill
              className="icon-dot text-red-600/30 active mt-10 mb-16"
              size={"12px"}
            />
          </i>
          <i>
            <BsFillCircleFill
              className="icon-dot text-red-600/30 mt-10 mb-16"
              style={{ marginLeft: "15px" }}
              size={"12px"}
            />
          </i>
          <i>
            <BsFillCircleFill
              className="icon-dot text-red-600/30 mt-10 mb-16"
              style={{ marginLeft: "15px" }}
              size={"12px"}
            />
          </i>
          <i>
            <BsFillCircleFill
              className="icon-dot text-red-600/30 mt-10 mb-16"
              style={{ marginLeft: "15px" }}
              size={"12px"}
            />
          </i>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
