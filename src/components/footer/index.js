import React, { useEffect, useRef, useState } from "react";
import { FooterSection } from "./styled";

const Footer = ({ nav }) => {
  const [showNav, setShowNav] = useState(false);

  const handleScrollLink = (e) => {
    e.preventDefault();

    const navHeight =
      nav.current.clientHeight > 80
        ? nav.current.clientHeight - 40
        : nav.current.clientHeight;
    const id = e.target.getAttribute("href").slice(1);
    const linkEl = document.getElementById(id);

    let position = linkEl.offsetTop - navHeight;

    window.scrollTo({
      top: position,
    });
  };

  useEffect(() => {
    const scrollNav = () => {
      // 120 -> navbar height
      window.pageYOffset > 120 ? setShowNav(true) : setShowNav(false);
    };
    window.addEventListener("scroll", scrollNav);

    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);

  return (
    <FooterSection className="container">
      <div className="footer d-flex">
        <div className="profile d-flex align-items-center">
          <img src="/assets/images/profile.jpg" alt="" />

          <div>
            <h1 className="name m-0">Cliff Kiven Parera</h1>
            <p className="m-0 p-0 ps-1">
              Lorem ipsum dolor sit amet, consectetur{" "}
            </p>
          </div>
        </div>

        <div className="product">
          <a href="#products" onClick={(e) => handleScrollLink(e)}>
            Produk
          </a>

          <div className="mt-3">
            <p className="m-0 p-0">All New Xenia</p>
            <p className="m-0 p-0">Terios</p>
            <p className="m-0 p-0">All New Xenia</p>
            <p className="m-0 p-0">Terios</p>
            <p className="m-0 p-0">All New Xenia</p>
            <p className="m-0 p-0">Terios</p>
            <p className="m-0 p-0">All New Xenia</p>
            <p className="m-0 p-0">Terios</p>
            <p className="m-0 p-0">All New Xenia</p>
          </div>
        </div>

        <div className="links d-flex flex-column">
          <a href="#promotion" onClick={(e) => handleScrollLink(e)}>
            Promo
          </a>
          <a href="#contact" onClick={(e) => handleScrollLink(e)}>
            Kontak
          </a>
        </div>
      </div>

      <p className="copy mb-1 text-center text-white">
        &copy; 2022. Daihatsu Sahabatku
      </p>
    </FooterSection>
  );
};

export default Footer;
