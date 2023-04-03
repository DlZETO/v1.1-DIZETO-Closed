import { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import Jumbotron from "./Jumbotron";

function Merge() {
  const navbarRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const aboutSectionTop = aboutSectionRef.current.offsetTop;
    const navbar = navbarRef.current;

    function handleScroll() {
      const styles = {
        transition: "background-color 1s ease-in-out, color 1s ease-in-out",
        color: window.pageYOffset >= aboutSectionTop - 67 ? "white" : "black",
        backgroundColor:
          window.pageYOffset >= aboutSectionTop - 67
            ? "rgba(0, 0, 0, 0.85)"
            : "rgba(0, 0, 0, 0)",
      };
      Object.assign(navbar.style, styles);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className="z-10 fixed top-0"
        style={{ width: "100%" }}
      >
        <div className="py-4">
          <div className="flex items-center">
            <Link
              to="top"
              spy={true}
              smooth={true}
              offset={-67}
              duration={1000}
              className="pl-16"
            >
              <img
                style={{ width: "35px", height: "35px" }}
                src={require("../../assets/images/logo/dizeto.svg").default}
                alt="Dizeto Navbar"
              />
            </Link>
            <div className="mx-auto hidden md:block">
              <ul
                className="flex font-semibold text-base"
                style={{ paddingRight: "99px" }}
              >
                <li className="pr-8 hover:text-red-600">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-67}
                    duration={1000}
                  >
                    About
                  </Link>
                </li>
                <li className="pr-8 hover:text-red-600">
                  <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-67}
                    duration={1000}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="pr-8 hover:text-red-600">
                  <Link
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={-67}
                    duration={1000}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="pr-8 hover:text-red-600">
                  <Link
                    to="testimony"
                    spy={true}
                    smooth={true}
                    offset={-67}
                    duration={1000}
                  >
                    Testimony
                  </Link>
                </li>
                <li className="pr-8 hover:text-red-600">
                  <Link
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={-67}
                    duration={1000}
                  >
                    Clients
                  </Link>
                </li>
                <li className="hover:text-red-600">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-67}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ml-auto pr-16 items-center block md:hidden">
              <button
                id="hamburger"
                className="rounded-lg hover:text-red-600"
                style={{ paddingTop: "6px" }}
              >
                <svg
                  className="fill-current h-5 w-5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div id="top" className="pb-40"></div>
      <Jumbotron />
      <section ref={aboutSectionRef} id="about" className="bg-white">
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
              <img src={require("../../assets/images/logo/dizeto.svg").default} alt="Dizeto About" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Merge;
