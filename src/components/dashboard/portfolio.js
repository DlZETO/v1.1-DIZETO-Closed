import photo1 from "../../asset/uploads/dashboard/f1/DZT_CC77.jpg";
import photo2 from "../../asset/uploads/dashboard/f1/DZT_CC6.jpg";
import photo3 from "../../asset/uploads/dashboard/f1/DZT_CC83.jpg";
import photo4 from "../../asset/uploads/dashboard/f1/DZT_CC86.jpg";
import photo5 from "../../asset/uploads/dashboard/f1/DZT_CC44.jpg";
import photo6 from "../../asset/uploads/dashboard/f1/DZT_CC36.jpg";
import photo7 from "../../asset/uploads/dashboard/f1/DZT_CC74.jpg";
import photo8 from "../../asset/uploads/dashboard/f1/DZT_CC71.jpg";
import photo9 from "../../asset/uploads/dashboard/f1/DZT_CC93.jpg";
import photo10 from "../../asset/uploads/dashboard/f1/DZT_CC88.jpg";
import photo11 from "../../asset/uploads/dashboard/f1/DZT_CC89.jpg";
import photo12 from "../../asset/uploads/dashboard/f1/DZT_CC39.jpg";

function Portfolio() {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
  ];

  return (
    <section className="bg-white pb-2 md:pb-11" id="portfolio">
      <h3 className="pt-2 md:pt-5 font-semibold text-4xl text-center">
        PORTFOL<span className="text-red-600">IO</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="flex justify-center">
        <a
          className="my-4 py-2 px-10 border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white"
          href="src/pages/portfolio"
        >
          CHECK ALL PORTFOLIO
        </a>
      </div>
      <div className="container mx-auto px-5">
        <ul className="dashboart-colum gap-4">
          {photos.map((photo, index) => (
            <li
              key={index}
              className="rounded-sm mb-4 border-2 border-gray-100 hover:border-red-600"
            >
              <div className="p-1">
                <a
                  href={photo}
                  data-lightbox="dashboart"
                  data-title="&copy; Copyright 2022 - DIZETO"
                >
                  <img className="rounded-sm" src={photo} alt={photo} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
