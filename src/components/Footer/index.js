import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import products from "../../assets/data/products";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";
import { FooterSection } from "./styled";

const Footer = ({ nav }) => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  const navigate = useNavigate();

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

  return (
    <FooterSection className="container">
      <div
        className={`footer d-flex ${
          isMD && "flex-column"
        } justify-content-between`}
      >
        <div
          className={`profile d-flex ${
            isLG && "flex-column"
          } align-items-center`}
        >
          <div className="img-container">
            <img src="/assets/images/profile.jpg" alt="profile" />
          </div>

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
            {products.map((item, index) => (
              <p
                onClick={() =>
                  navigate(`/${item.name.toLowerCase().split(" ").join("-")}`, {
                    state: item,
                  })
                }
                key={index}
                className="m-0 p-0"
              >
                {item.name}
              </p>
            ))}
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

      <p className="copy m-0 text-center text-white">
        &copy; 2022. Daihatsu Sahabatku
      </p>
    </FooterSection>
  );
};

export default Footer;
