import React from "react";

export default function ClientsImage() {
  const cls = "h-full max-h-[112px] opacity-70 hover:opacity-100";
  return (
    <section className="bg-white py-20 transition-all duration-500 dark:bg-dark">
      <div className="container mx-auto px-5">
        <h3 className="text-center text-4xl font-semibold transition-all duration-500 dark:text-white">
          CLIEN<span className="text-red-600">TS</span>
        </h3>
        <div className="red-line-h"></div>
        <div className="flex items-center justify-center gap-x-10 py-5">
          <a href="http://www.angklungmuhibah.id/" target="_blank" rel="noopener noreferrer">
            <img className={cls} src={require("../../assets/images/client/ma.png")} alt="Muhibah Angklung" />
          </a>
          <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" target="_blank" rel="noopener noreferrer">
            <img className={cls} src={require("../../assets/images/client/rbw.png")} alt="Rumah Batik Wijaya" />
          </a>
          <a href="https://irmajabar.com/" target="_blank" rel="noopener noreferrer">
            <img className={cls} src={require("../../assets/images/client/irma.png")} alt="Ikatan Remaja Masjid Jawa Barat" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-x-10 pt-5">
          <a href="https://shopee.co.id/topnapurnama?categoryId=100629&entryPoint=ShopByPDP&itemId=15208206609" target="_blank" rel="noopener noreferrer">
            <img className={cls} src={require("../../assets/images/client/kp.png")} alt="Kopi Purnama" />
          </a>
          <a href="https://gofood.link/a/DVoCLZN" target="_blank" rel="noopener noreferrer">
            <img className={cls} src={require("../../assets/images/client/lc.png")} alt="Lentera Coffee" />
          </a>
          <a href="https://www.youtube.com/@vittosafiy748" target="_blank" rel="noopener noreferrer">
            <img className={cls} src={require("../../assets/images/client/sk.png")} alt="Safiy Kitchen" />
          </a>
          <a href="https://pesantrentahfidzashrmadani.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <img className={cls} src={require("../../assets/images/client/aa.png")} alt="Al-'Ashr Al-Madani" />
          </a>
        </div>
      </div>
    </section>
  );
}
