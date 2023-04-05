import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { BsArrowLeft } from "react-icons/bs";
import Preloader from "../components/Preloader";
import ImageFallback from "../components/ImageFallback";
import "../css/tailwind.css";
import "../css/style.css";
import "../css/lightbox.min.css";
import Footer from "../components/Footer";

function Portfolio() {
  const pathIndex = {
    "/list/section/01": 0,
    "/list/section/02": 1,
    "/list/section/03": 2,
    "/list/section/04": 3,
    "/list/section/05": 4,
    "/list/section/06": 5,
    "/list/section/07": 6,
    "/list/section/08": 7,
    "/list/section/09": 8,
    "/list/section/10": 9,
    "/list/section/11": 10,
    "/list/section/12": 11,
    "/list/section/13": 12,
    "/list/section/14": 13,
    "/list/section/15": 14,
    "/list/section/16": 15,
    "/list/section/17": 16,
    "/list/section/18": 17,
  };

  const index = pathIndex[window.location.pathname] || 0;

  const link = [
    {
      id: 1,
      tdat: 82,
      tit1: "GINZA'S BIRTHDAY",
      tit2: "GINZA'S BIRTHD",
      tit3: "AY",
      dt: "11TH DECEMBER, 2021",
      fldr: "ginzas-birthday",
      alt: "Ginza's Birthday",
      cc: "© Copyright 2021 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 2,
      tdat: 20,
      tit1: "HALIM PRE-WEDDING",
      tit2: "HALIM PRE-WEDDI",
      tit3: "NG",
      dt: "19TH FEBRUARY, 2022",
      fldr: "halim-prewedding",
      alt: "Halim Pre-Wedding",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 3,
      tdat: 202,
      tit1: "ICHA'S BIRTHDAY",
      tit2: "ICHA'S BIRTHD",
      tit3: "AY",
      dt: "12TH JUNE, 2022",
      fldr: "ichas-birthday",
      alt: "Icha's Birthday",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 4,
      tdat: 16,
      tit1: "LENTERA COFFEE",
      tit2: "LENTERA COFF",
      tit3: "EE",
      dt: "13TH JUNE, 2022",
      fldr: "lentera-coffee",
      alt: "Lentera Coffee",
      cc: "© Copyright 2022 - DIZETO",
      cls: "c-portfolio-colum",
    },
    {
      id: 5,
      tdat: 20,
      tit1: "MACAIRE",
      tit2: "MACAI",
      tit3: "RE",
      dt: "26TH JULY, 2020",
      fldr: "macaire",
      alt: "Macaire",
      cc: "© Copyright 2020 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 6,
      tdat: 95,
      tit1: "MITA'S BIRTHDAY",
      tit2: "MITA'S BIRTHD",
      tit3: "AY",
      dt: "26TH FEBRUARY, 2022",
      fldr: "mitas-birthday",
      alt: "Mita's Birthday",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 7,
      tdat: 62,
      tit1: "NAZLA CLOTHES",
      tit2: "NAZLA CLOTH",
      tit3: "ES",
      dt: "24TH DECEMBER, 2022",
      fldr: "nazla-clothes",
      alt: "Nazla Clothes",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 8,
      tdat: 102,
      tit1: "FAIZAL GRADUATION",
      tit2: "FAIZAL GRADUATI",
      tit3: "ON",
      dt: "28TH MAY, 2022",
      fldr: "faizal-graduation",
      alt: "Faizal Graduation",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 9,
      tdat: 98,
      tit1: "RENI PRE-WEDDING",
      tit2: "RENI PRE-WEDDI",
      tit3: "NG",
      dt: "27TH MAY, 2022",
      fldr: "reni-prewedding",
      alt: "Reni Pre-Wedding",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 10,
      tdat: 150,
      tit1: "ROSITA PRE-WEDDING",
      tit2: "ROSITA PRE-WEDDI",
      tit3: "NG",
      dt: "29TH MARCH, 2022",
      fldr: "rosita-prewedding",
      alt: "Rosita Pre-Wedding",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 11,
      tdat: 69,
      tit1: "SELY HUNTING",
      tit2: "SELY HUNTI",
      tit3: "NG",
      dt: "24TH APRIL, 2022",
      fldr: "sely-hunting",
      alt: "Sely Hunting",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 12,
      tdat: 30,
      tit1: "TENANG COFFEE",
      tit2: "TENANG COFF",
      tit3: "EE",
      dt: "10TH APRIL, 2022",
      fldr: "tenang-coffee",
      alt: "Tenang Coffee",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 13,
      tdat: 221,
      tit1: "IRMA JABAR",
      tit2: "IRMA JAB",
      tit3: "AR",
      dt: "18TH DECEMBER, 2021",
      fldr: "irma-jabar",
      alt: "IRMA JABAR",
      cc: "© Copyright 2021 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 14,
      tdat: 215,
      tit1: "MUHIBAH ANGKLUNG",
      tit2: "MUHIBAH ANGKLU",
      tit3: "NG",
      dt: "3RD JUNE, 2022",
      fldr: "muhibah-angklung",
      alt: "Muhibah Angklung",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 15,
      tdat: 0,
      tit1: "AYA MUSIC COVER",
      tit2: "AYA MUSIC COV",
      tit3: "ER",
      dt: "22ND MAY, 2022",
      fldr: "aya-music-cover",
      alt: "Aya Music Cover",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 16,
      tdat: 110,
      tit1: "HKBP BANDUNG",
      tit2: "HKBP BANDU",
      tit3: "NG",
      dt: "2ND MAY, 2021",
      fldr: "hkbp-bandung",
      alt: "HKBP Bandung",
      cc: "© Copyright 2021 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 17,
      tdat: 34,
      tit1: "SAFIY KITCHEN",
      tit2: "SAFIY KITCH",
      tit3: "EN",
      dt: "23RD JANUARY, 2022",
      fldr: "safiy-kitchen",
      alt: "Safiy Kitchen",
      cc: "© Copyright 2022 - DIZETO",
      cls: "portfolio-colum",
    },
    {
      id: 18,
      tdat: 54,
      tit1: "RUMAH BATIK WIJAYA",
      tit2: "RUMAH BATIK WIJA",
      tit3: "YA",
      dt: "04TH FEBRUARY, 2023",
      fldr: "rumah-batik-wijaya",
      alt: "Rumah Batik Wijaya",
      cc: "© Copyright 2023 - DIZETO",
      cls: "portfolio-colum",
    },
  ];

  let myData = [];

  for (let i = 1; i <= link[index].tdat; i++) {
    myData.push(`DZT_CC${i}.jpg`);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 50;

  // Menghitung jumlah total halaman
  const totalPages = Math.ceil(myData.length / perPage);

  // Menghitung index awal dan akhir data untuk halaman yang sedang aktif
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  // Membuat array data yang ditampilkan pada halaman aktif
  const currentData = myData.slice(startIndex, endIndex);

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("bg-img-portfolio");

    return () => {
      body.classList.remove("bg-img-portfolio");
    };
  }, []);

  return (
    <>
      <Preloader />
      <div id="top"></div>
      <section
        className="container mx-auto px-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex items-center pt-10 lg:py-10">
          <div
            className="flex items-center"
            style={{ minWidth: "max-content" }}
          >
            <div className="mr-5 lg:mr-0">
              <h3 className="text-4xl font-semibold">
                {link[index].tit2}
                <span className="text-red-600">{link[index].tit3}</span>
              </h3>
              <p className="block text-right text-base font-semibold tracking-widest">
                {link[index].dt}
              </p>
            </div>

            <div
              className="hidden pl-20 lg:block"
              style={{ width: "max-content" }}
            >
              <div className="flex items-center">
                <Link
                  className="button-no-page mr-5 border-2 border-red-600 pt-1 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                  to="/list"
                >
                  <BsArrowLeft className="mx-auto my-1" />
                </Link>
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  if (pageNumber === currentPage) {
                    return (
                      <button
                        key={pageNumber}
                        className="button-no-page mr-5 border-2 border-red-600 bg-red-600 font-semibold text-white"
                      >
                        {pageNumber}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className="button-no-page mr-5 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                })}
              </div>
            </div>
          </div>
          <div className="red-line-h-portfolio"></div>
        </div>
        <div
          className="mx-auto block py-6 lg:hidden"
          style={{ width: "max-content" }}
        >
          <div className="flex items-center">
            <Link
              className="button-no-page mr-5 border-2 border-red-600 pt-1 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
              to="/list"
            >
              <BsArrowLeft className="mx-auto my-1" />
            </Link>
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              if (pageNumber === currentPage) {
                return (
                  <button
                    key={pageNumber}
                    className="button-no-page mr-5 border-2 border-red-600 bg-red-600 font-semibold text-white"
                  >
                    {pageNumber}
                  </button>
                );
              } else {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className="button-no-page mr-5 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                  >
                    {pageNumber}
                  </button>
                );
              }
            })}
          </div>
        </div>
        <div>
          <ul className={`${link[index].cls} gap-4`}>
            {currentData.map((data) => (
              <li
                key={data}
                className="mb-4 border-2 border-gray-100 bg-white hover:border-red-600"
              >
                <div className="p-1">
                  <a
                    href={require(`../assets/uploads/${link[index].fldr}/${data}`)}
                    data-lightbox={link[index].alt}
                    data-title={link[index].cc}
                  >
                    <ImageFallback
                      src={require(`../assets/uploads/${link[index].fldr}/thumbnail/${data}`)}
                      alt={link[index].alt}
                    />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="scroll my-6 border-2 border-red-600 px-10 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white">
            <Scroll
              to="top"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              BACK TO TOP
            </Scroll>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Portfolio;
