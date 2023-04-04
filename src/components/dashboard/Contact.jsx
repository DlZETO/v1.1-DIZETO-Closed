import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function Contact() {
  return (
    <section id="contact" className="bg-white pb-9">
      <h3 className="pt-2 md:pt-5 font-semibold text-4xl text-center">
        CONTA<span className="text-red-600">CT</span>
      </h3>
      <div className="red-line-h"></div>
      <div className="container mx-auto px-5 pt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.035880336206!2d107.6482381153243!3d-6.8863057692995255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e76a1e6f56f3%3A0x8649ff7558d15108!2sDIZETO!5e0!3m2!1sid!2sid!4v1676677774416!5m2!1sid!2sid"
          className="rounded-sm"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <ul className="pt-8 text-base">
          <li className="flex">
            <i style={{ marginLeft: 3, marginRight: 10, marginTop: 5 }}>
              <FaMapMarkerAlt />
            </i>
            <strong>Address:</strong>
            <a
              className="hover:text-red-600 ml-2"
              href="https://goo.gl/maps/p92HMz8wHBQKFnKd9"
              target="_blank"
              rel="noreferrer"
            >
              Blk. A-B No.a8, Cibeunying, Kec. Cimenyan, Kabupaten Bandung, Jawa
              Barat 40191, Indonesia
            </a>
          </li>
          <li className="flex pt-2">
            <i style={{ marginRight: 9, marginLeft: 3, marginTop: 5 }}>
              <FaEnvelope />
            </i>
            <strong>Email:</strong>
            <a
              className="hover:text-red-600 ml-2"
              href="https://mail.google.com/mail/u/?authuser=dizetobs@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              dizetobs@gmail.com
            </a>
          </li>
          <li className="flex pt-2">
            <i style={{ marginRight: 9, marginLeft: 3, marginTop: 5 }}>
              <FaPhoneAlt />
            </i>
            <strong>Phone:</strong>
            <a
              className="hover:text-red-600 ml-2"
              href="https://wa.link/vnm99c"
              target="_blank"
              rel="noreferrer"
            >
              +62 821-1959-6508
            </a>
          </li>
          <li className="flex pt-2">
            <i style={{ marginRight: 9, marginLeft: 3, marginTop: 5 }}>
              <TbWorldWww />
            </i>
            <strong>Website:</strong>
            <a
              className="hover:text-red-600 ml-2"
              href="https://www.dizeto.com"
              target="_blank"
              rel="noreferrer"
            >
              https://www.dizeto.com/
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
