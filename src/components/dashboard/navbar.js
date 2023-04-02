function Navbar() {
  window.onscroll = function () {
    var aboutSection = document.getElementById("about");
    var aboutSectionTop = aboutSection.offsetTop;
    var navbar = document.querySelector("nav");
    var styles = {
      transition: "background-color 1s ease-in-out, color 1s ease-in-out",
      color: window.pageYOffset >= aboutSectionTop - 67 ? "white" : "black",
      backgroundColor:
        window.pageYOffset >= aboutSectionTop - 67
          ? "rgba(0, 0, 0, 0.85)"
          : "rgba(0, 0, 0, 0)",
    };
    Object.assign(navbar.style, styles);
  };
  return (
    <div>
      <div className="py-4">
        <div className="flex items-center">
          <a href="#top" className="pl-16 scroll">
            <img
              style={{ width: "35px", height: "35px" }}
              src="asset/images/logo/dizeto.svg"
              alt="Dizeto Navbar"
            />
          </a>
          <div className="mx-auto hidden md:block">
            <ul
              className="flex font-semibold text-base"
              style={{ paddingRight: "99px" }}
            >
              <li className="pr-8 hover:text-red-600">
                <a className="scroll" href="#about">
                  About
                </a>
              </li>
              <li className="pr-8 hover:text-red-600">
                <a className="scroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="pr-8 hover:text-red-600">
                <a className="scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="pr-8 hover:text-red-600">
                <a className="scroll" href="#testimony">
                  Testimony
                </a>
              </li>
              <li className="pr-8 hover:text-red-600">
                <a className="scroll" href="#clients">
                  Clients
                </a>
              </li>
              <li className="hover:text-red-600">
                <a className="scroll" href="#contact">
                  Contact
                </a>
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
    </div>
  );
}

export default Navbar;
