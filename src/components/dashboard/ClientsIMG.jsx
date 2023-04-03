import React from "react";

function ClientsIMG() {
  return (
    <section className="bg-white pb-2">
      <h3 className="pt-8 md:pt-16 font-semibold text-4xl text-center">
        CLIEN<span className="text-red-600">TS</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="container mx-auto px-5 py-2">
        <div className="flex items-center justify-center py-8">
          <a
            className="img-client-margin"
            href="http://www.angklungmuhibah.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-client opacity-70 hover:opacity-100"
              src={require("/src/assets/images/client/ma.png").default}
              alt="Muhibah Angklung"
            />
          </a>
          <a
            className="img-client-margin"
            href="https://www.instagram.com/rumahbatikwijaya/?hl=id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-client opacity-70 hover:opacity-100"
              src={require("/src/assets/images/client/rbw.png").default}
              alt="Rumah Batik Wijaya"
            />
          </a>
          <a
            className="img-client-margin"
            href="https://irmajabar.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-client opacity-70 hover:opacity-100"
              src={require("/src/assets/images/client/irma.png").default}
              alt="Ikatan Remaja Masjid Jawa Barat"
            />
          </a>
        </div>
        <div className="flex items-center justify-center py-8">
          <a
            className="img-client-margin"
            href="https://shopee.co.id/topnapurnama?categoryId=100629&entryPoint=ShopByPDP&itemId=15208206609"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-client opacity-70 hover:opacity-100"
              src={require("/src/assets/images/client/kp.png").default}
              alt="Kopi Purnama"
            />
          </a>
          <a
            className="img-client-margin"
            href="https://gofood.link/a/DVoCLZN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-client opacity-70 hover:opacity-100"
              src={require("/src/assets/images/client/lc.png").default}
              alt="Lentera Coffee"
            />
          </a>
          <a
            className="img-client-margin"
            href="https://www.youtube.com/@vittosafiy748"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-client opacity-70 hover:opacity-100"
              src={require("/src/assets/images/client/sk.png").default}
              alt="Safiy Kitchen"
            />
          </a>
          <a
            className="img-client-margin"
            href="https://pesantrentahfidzashrmadani.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img-client opacity-70 hover:opacity-100"
              src={require("/src/assets/images/client/aa.png").default}
              alt="Al-'Ashr Al-Madani"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClientsIMG;
