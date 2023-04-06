import React from "react";

function ClientsIMG() {
  return (
    <section className="bg-white pb-2 transition-all duration-500 dark:bg-dark">
      <h3 className="pt-8 text-center text-4xl font-semibold transition-all duration-500 dark:text-white md:pt-16">
        CLIEN<span className="text-red-600">TS</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="container mx-auto px-5 py-2">
        <div className="flex items-center justify-center py-8">
          <a className="img-client-margin" href="http://www.angklungmuhibah.id/" target="_blank" rel="noopener noreferrer">
            <img className="img-client opacity-70 hover:opacity-100" src={require("../../assets/images/client/ma.png")} alt="Muhibah Angklung" />
          </a>
          <a className="img-client-margin" href="https://www.instagram.com/rumahbatikwijaya/?hl=id" target="_blank" rel="noopener noreferrer">
            <img className="img-client opacity-70 hover:opacity-100" src={require("../../assets/images/client/rbw.png")} alt="Rumah Batik Wijaya" />
          </a>
          <a className="img-client-margin" href="https://irmajabar.com/" target="_blank" rel="noopener noreferrer">
            <img className="img-client opacity-70 hover:opacity-100" src={require("../../assets/images/client/irma.png")} alt="Ikatan Remaja Masjid Jawa Barat" />
          </a>
        </div>
        <div className="flex items-center justify-center py-8">
          <a className="img-client-margin" href="https://shopee.co.id/topnapurnama?categoryId=100629&entryPoint=ShopByPDP&itemId=15208206609" target="_blank" rel="noopener noreferrer">
            <img className="img-client opacity-70 hover:opacity-100" src={require("../../assets/images/client/kp.png")} alt="Kopi Purnama" />
          </a>
          <a className="img-client-margin" href="https://gofood.link/a/DVoCLZN" target="_blank" rel="noopener noreferrer">
            <img className="img-client opacity-70 hover:opacity-100" src={require("../../assets/images/client/lc.png")} alt="Lentera Coffee" />
          </a>
          <a className="img-client-margin" href="https://www.youtube.com/@vittosafiy748" target="_blank" rel="noopener noreferrer">
            <img className="img-client opacity-70 hover:opacity-100" src={require("../../assets/images/client/sk.png")} alt="Safiy Kitchen" />
          </a>
          <a className="img-client-margin" href="https://pesantrentahfidzashrmadani.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <img className="img-client opacity-70 hover:opacity-100" src={require("../../assets/images/client/aa.png")} alt="Al-'Ashr Al-Madani" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClientsIMG;
