import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "../css/tailwind.css";
import "../css/style.css";
import "../css/lightbox.min.css";
import Footer from "../components/Footer";

function ListPortfolio() {
  const myData = [
    {
      id: 1,
      image: "safiy-kitchen/thumbnail/thumbnail.jpg",
      title: "SAFIY KITCHEN",
      category: "(CONTENT)",
    },
    {
      id: 2,
      image: "ginzas-birthday/thumbnail/thumbnail.jpg",
      title: "GINZA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
    },
    {
      id: 3,
      image: "irma-jabar/thumbnail/thumbnail.jpg",
      title: "IRMA JABAR",
      category: "(DOCUMENTATION)",
    },
    {
      id: 4,
      image: "muhibah-angklung/thumbnail/thumbnail.jpg",
      title: "MUHIBAH ANGKLUNG",
      category: "(DOCUMENTATION)",
    },
    {
      id: 5,
      image: "faizal-graduation/thumbnail/thumbnail.jpg",
      title: "FAIZAL GRADUATION",
      category: "(DOCUMENTATION)",
    },
    {
      id: 6,
      image: "mitas-birthday/thumbnail/thumbnail.jpg",
      title: "MITA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
    },
    {
      id: 7,
      image: "hkbp-bandung/thumbnail/thumbnail.jpg",
      title: "HKBP BANDUNG",
      category: "(DOCUMENTATION)",
    },
    {
      id: 8,
      image: "ichas-birthday/thumbnail/thumbnail.jpg",
      title: "ICHA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
    },
    {
      id: 9,
      image: "sely-hunting/thumbnail/thumbnail.jpg",
      title: "SELY",
      category: "(HUNTING)",
    },
    {
      id: 10,
      image: "aya-music-cover/thumbnail/thumbnail.jpg",
      title: "AYA",
      category: "(MUSIC COVER)",
    },
    {
      id: 11,
      image: "nazla-clothes/thumbnail/thumbnail.jpg",
      title: "NAZLA CLOTHES",
      category: "(PHOTO SHOOT)",
    },
    {
      id: 12,
      image: "rosita-prewedding/thumbnail/thumbnail.jpg",
      title: "ROSITA",
      category: "(PRE-WEDDING)",
    },
    {
      id: 13,
      image: "reni-prewedding/thumbnail/thumbnail.jpg",
      title: "RENI",
      category: "(PRE-WEDDING)",
    },
    {
      id: 14,
      image: "halim-prewedding/thumbnail/thumbnail.jpg",
      title: "HALIM",
      category: "(PRE-WEDDING)",
    },
    {
      id: 15,
      image: "tenang-coffee/thumbnail/thumbnail.jpg",
      title: "TENANG COFFEE",
      category: "(PRODUCT)",
    },
    {
      id: 16,
      image: "macaire/thumbnail/thumbnail.jpg",
      title: "MACAIRE",
      category: "(PRODUCT)",
    },
    {
      id: 17,
      image: "lentera-coffee/thumbnail/thumbnail.jpg",
      title: "LENTERA COFFEE",
      category: "(PRODUCT)",
    },
    {
      id: 18,
      image: "rumah-batik-wijaya/thumbnail/thumbnail.jpg",
      title: "RUMAH BATIK WIJAYA",
      category: "(PRODUCT)",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 21;

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
      <section
        className="container mx-auto px-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex items-center py-10">
          <div
            className="flex items-center"
            style={{ minWidth: "max-content" }}
          >
            <div>
              <h1 className="font-semibold text-4xl">
                PORTFOL<span className="text-red-600">IO</span>
              </h1>
              <p className="block font-semibold text-base text-right tracking-widest">
                - DIZETO -
              </p>
            </div>
            <div
              className="flex items-center pl-20"
              style={{ width: "max-content" }}
            >
              <Link
                className="button-no-page pt-1 mr-5 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                to="/DIZETO-REACT"
              >
                <BsArrowLeft className="mx-auto my-1" />
              </Link>
              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1;
                if (pageNumber === currentPage) {
                  return (
                    <span
                      key={pageNumber}
                      className="button-no-page pt-1 mr-5 border-2 border-red-600 font-semibold bg-red-600 text-white"
                    >
                      {pageNumber}
                    </span>
                  );
                } else {
                  return (
                    <span
                      key={pageNumber}
                      className="button-no-page pt-1 mr-5 border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </span>
                  );
                }
              })}
            </div>
          </div>
          <div className="red-line-h-portfolio"></div>
        </div>
        <div>
          <ul className="grid c-grid-cols gap-5 pb-10">
            {/* Menampilkan data pada halaman aktif */}
            {currentData.map((item) => (
              <li key={item.id}>
                <div
                  className="rounded-md bg-white border border-gray-100 hover:border-red-600"
                  style={{ width: "100%", height: "max-content" }}
                >
                  <div className="canvas m-2">
                    <img
                      className="scale-image rounded-md"
                      src={require(`../assets/uploads/${item.image}`)}
                      alt={item.title}
                    />
                  </div>
                  <div className="red-line-h"></div>
                  <div>
                    <h3 className="px-2 text-center font-semibold text-lg sm:text-base lg:text-lg">
                      {item.title}
                    </h3>
                    <h4 className="text-center font-semibold text-sm sm:text-xs lg:text-sm pb-2">
                      {item.category}
                    </h4>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      className="mb-4 mt-1 py-2 px-10 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white"
                      to="/DIZETO-REACT/LIST/sec00"
                    >
                      OPEN
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ListPortfolio;
