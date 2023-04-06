import React from "react";
import Navbar from "./navbar/Index";
import Jumbotron from "./Jumbotron";

function Merge() {
  return (
    <>
      <Navbar />
      <div id="top" className="pb-40"></div>
      <Jumbotron />
      <section id="about" className="bg-white transition-all duration-500 dark:bg-dark">
        <h3 className="pt-5 text-center text-4xl font-semibold transition-all duration-500 dark:text-white">
          ABO<span className="text-red-600">UT</span>
        </h3>
        <div className="red-line-h"></div>
        <div className="container mx-auto px-5 pb-2 pt-4 md:pb-20">
          <div className="grid grid-cols-1 font-medium md:grid-cols-2">
            <div className="about-text my-auto">
              <h4 className="pb-4 text-2xl font-semibold transition-all duration-500 dark:text-white">
                <span className="text-red-600">W</span>hat is Dizeto?
              </h4>
              <p className="text-justify text-lg transition-all duration-500 dark:text-white">
                <span className="text-red-600">Dizeto</span> is a vendor that offers photography, videography, talent, and music services. We have a professional team that can help you meet business
                needs, events, and your special moments to make them more beautiful, real, and lasting. You can learn more about us by viewing our portfolio, YouTube channel, and customer
                testimonials.
                <br />
                <br />
                <span className="text-red-600">*Please take note that we currently only offer photography and videography services.</span>
              </p>
            </div>
            <div className="logo-about-img mx-auto my-8 md:my-auto">
              <img src={require("../../assets/images/logo/dizeto.svg").default} alt="Dizeto About" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Merge;
