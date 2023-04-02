import React from "react";

function About() {
  return (
    <section id="about" className="bg-white">
      <h3 className="pt-5 font-semibold text-4xl text-center">
        ABO<span className="text-red-600">UT</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="container mx-auto px-5 pt-4 pb-2 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 font-medium">
          <div className="about-text my-auto">
            <h4 className="text-2xl font-semibold pb-4">
              <span className="text-red-600">W</span>hat is Dizeto?
            </h4>
            <p className="text-lg text-justify">
              <span className="text-red-600">Dizeto</span> is a vendor that
              offers photography, videography, talent, and music services. We
              have a professional team that can help you meet business needs,
              events, and your special moments to make them more beautiful,
              real, and lasting. You can learn more about us by viewing our
              portfolio, YouTube channel, and customer testimonials.
              <br />
              <br />
              <span className="text-red-600">
                *Please take note that we currently only offer photography and
                videography services.
              </span>
            </p>
          </div>
          <div className="logo-about-img my-8 md:my-auto mx-auto">
            <img src="asset/images/logo/dizeto.svg" alt="Dizeto About" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
