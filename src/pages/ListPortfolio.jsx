import "../css/tailwind.css";
import "../css/style.css";
import "../css/lightbox.min.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import PaginationFirst from "../components/PaginationFirst";
import PaginationSecond from "../components/PaginationSecond";
import Footer from "../components/Footer";

export default function ListPortfolio() {
  const myData = [
    {
      id: 1,
      image: "ginzas-birthday/thumbnail/thumbnail.jpg",
      title: "GINZA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "01",
    },
    {
      id: 2,
      image: "halim-prewedding/thumbnail/thumbnail.jpg",
      title: "HALIM",
      category: "(PRE-WEDDING)",
      link: "02",
    },
    {
      id: 3,
      image: "ichas-birthday/thumbnail/thumbnail.jpg",
      title: "ICHA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "03",
    },
    {
      id: 4,
      image: "lentera-coffee/thumbnail/thumbnail.jpg",
      title: "LENTERA COFFEE",
      category: "(PRODUCT)",
      link: "04",
    },
    {
      id: 5,
      image: "macaire/thumbnail/thumbnail.jpg",
      title: "MACAIRE",
      category: "(PRODUCT)",
      link: "05",
    },
    {
      id: 6,
      image: "mitas-birthday/thumbnail/thumbnail.jpg",
      title: "MITA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "06",
    },
    {
      id: 7,
      image: "nazla-clothes/thumbnail/thumbnail.jpg",
      title: "NAZLA CLOTHES",
      category: "(PHOTO SHOOT)",
      link: "07",
    },
    {
      id: 8,
      image: "faizal-graduation/thumbnail/thumbnail.jpg",
      title: "FAIZAL GRADUATION",
      category: "(DOCUMENTATION)",
      link: "08",
    },
    {
      id: 9,
      image: "reni-prewedding/thumbnail/thumbnail.jpg",
      title: "RENI",
      category: "(PRE-WEDDING)",
      link: "09",
    },
    {
      id: 10,
      image: "rosita-prewedding/thumbnail/thumbnail.jpg",
      title: "ROSITA",
      category: "(PRE-WEDDING)",
      link: "10",
    },
    {
      id: 11,
      image: "sely-hunting/thumbnail/thumbnail.jpg",
      title: "SELY",
      category: "(HUNTING)",
      link: "11",
    },
    {
      id: 12,
      image: "tenang-coffee/thumbnail/thumbnail.jpg",
      title: "TENANG COFFEE",
      category: "(PRODUCT)",
      link: "12",
    },
    {
      id: 13,
      image: "irma-jabar/thumbnail/thumbnail.jpg",
      title: "IRMA JABAR",
      category: "(DOCUMENTATION)",
      link: "13",
    },
    {
      id: 14,
      image: "muhibah-angklung/thumbnail/thumbnail.jpg",
      title: "MUHIBAH ANGKLUNG",
      category: "(DOCUMENTATION)",
      link: "14",
    },
    {
      id: 15,
      image: "aya-music-cover/thumbnail/thumbnail.jpg",
      title: "AYA",
      category: "(MUSIC COVER)",
      link: "15",
    },
    {
      id: 16,
      image: "hkbp-bandung/thumbnail/thumbnail.jpg",
      title: "HKBP BANDUNG",
      category: "(DOCUMENTATION)",
      link: "16",
    },
    {
      id: 17,
      image: "safiy-kitchen/thumbnail/thumbnail.jpg",
      title: "SAFIY KITCHEN",
      category: "(CONTENT)",
      link: "17",
    },
    {
      id: 18,
      image: "rumah-batik-wijaya/thumbnail/thumbnail.jpg",
      title: "RUMAH BATIK WIJAYA",
      category: "(PRODUCT)",
      link: "18",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;
  const totalPages = Math.ceil(myData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentData = myData.slice(startIndex, endIndex);

  useEffect(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    body.classList.add("bg-img-portfolio");
    if (html.className === "dark") {
      body.setAttribute("style", "background-image: url(./background-dark.jpg);");
    } else {
      body.setAttribute("style", "background-image: url(./background.jpg);");
    }

    return () => {
      body.classList.remove("bg-img-portfolio");
      body.removeAttribute("style");
    };
  }, []);

  return (
    <>
      <Loading />
      <section className="container mx-auto mb-10 min-h-screen px-5">
        <div className="flex items-center pt-10 lg:py-10">
          <div className="flex min-w-max items-center">
            {/* ----------------------------------- */}
            <div className="mr-5 lg:mr-20">
              <h1 className="text-4xl font-semibold dark:text-white">
                PORTFOL<span className="text-red-600">IO</span>
              </h1>
              <p className="text-right text-base font-semibold tracking-widest dark:text-white">- DIZETO -</p>
            </div>
            {/* ----------------------------------- */}
            <PaginationFirst
              back="/"
              value={Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                if (pageNumber === currentPage) {
                  return (
                    <button key={pageNumber} className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 bg-red-600 font-semibold text-white">
                      {pageNumber}
                    </button>
                  );
                } else {
                  return (
                    <button
                      key={pageNumber}
                      className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                }
              })}
            />
          </div>
          <div className="red-line-h-portfolio"></div>
        </div>
        {/* ----------------------------------- */}
        <PaginationSecond
          back="/"
          value={Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            if (pageNumber === currentPage) {
              return (
                <button key={pageNumber} className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 bg-red-600 font-semibold text-white">
                  {pageNumber}
                </button>
              );
            } else {
              return (
                <button
                  key={pageNumber}
                  className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            }
          })}
        />
        {/* ----------------------------------- */}
        <div>
          <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
            {currentData.map((item) => (
              <li className="transition-all duration-500 hover:drop-shadow-md-black dark:hover:drop-shadow-md-white" key={item.id}>
                <Link to={`/list/section/${item.link}`}>
                  <div className="rounded-md border border-gray-300 bg-white hover:border-red-600 dark:border-gray-700 dark:bg-dark dark:hover:border-red-600">
                    <div className="m-2">
                      <img className="rounded-md" src={require(`../assets/uploads/${item.image}`)} alt={item.title} />
                    </div>
                    <div className="red-line-h"></div>
                    <div>
                      <h3 className="mx-2 text-center text-lg font-semibold dark:text-white sm:text-base lg:text-lg">{item.title}</h3>
                      <h4 className="mb-2 text-center text-sm font-semibold dark:text-white sm:text-xs lg:text-sm">{item.category}</h4>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* ----------------------------------- */}
      </section>
      <Footer />
    </>
  );
}
