import { useRef, useEffect } from "react";
import Navbar from "./navbar/Index";
import Jumbotron from "./Jumbotron";

function Merge() {
  // const navbarRef = useRef(null);
  // const aboutSectionRef = useRef(null);

  // useEffect(() => {
  //   const aboutSectionTop = aboutSectionRef.current.offsetTop;
  //   const navbar = navbarRef.current;

  //   function handleScroll() {
  //     const styles = {
  //       transition: "background-color 1s ease-in-out, color 1s ease-in-out",
  //       color: window.pageYOffset >= aboutSectionTop - 67 ? "white" : "black",
  //       backgroundColor: window.pageYOffset >= aboutSectionTop - 67 ? "rgba(0, 0, 0, 0.85)" : "rgba(0, 0, 0, 0)",
  //     };
  //     Object.assign(navbar.style, styles);
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Navbar />
      <div id="top" className="pb-40"></div>
      <Jumbotron />
      <section id="about" className="bg-white">
        <h3 className="pt-5 text-center text-4xl font-semibold">
          ABO<span className="text-red-600">UT</span>
        </h3>
        <div className="red-line-h"></div>
        <div className="container mx-auto px-5 pb-2 pt-4 md:pb-20">
          <div className="grid grid-cols-1 font-medium md:grid-cols-2">
            <div className="about-text my-auto">
              <h4 className="pb-4 text-2xl font-semibold">
                <span className="text-red-600">W</span>hat is Dizeto?
              </h4>
              <p className="text-justify text-lg">
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
