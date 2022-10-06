import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import products from "../../assets/data/products";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";
import { FooterSection } from "./styled";

const Footer = ({ nav }) => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const handleScrollLink = (e) => {
    e.preventDefault();

    const navHeight =
      nav.current.clientHeight > 80
        ? nav.current.clientHeight - 40
        : nav.current.clientHeight;
    const id = e.target.getAttribute("href").slice(1);
    const linkEl = document.getElementById(id);
    const isContact = id === "contact";

    if (!isHome && !isContact) {
      navigate("/", { state: { navHeight, id } });
      return;
    }

    let position = linkEl.offsetTop - navHeight;

    window.scrollTo({
      top: position,
    });
  };

  return (
    <FooterSection className="container">
      <div className={`footer`}>
        <div
          className={`owner d-flex ${
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
              <h1 className="name m-0">Cliff Daihatsu</h1>
              <p className="m-0 p-0 ps-1">Sales Executive</p>
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
                    navigate(
                      `/${item.name.toLowerCase().split(" ").join("-")}`,
                      {
                        state: item,
                      }
                    )
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

        <div
          className={`address d-flex ${
            isLG && "flex-column"
          } justify-content-between align-items-start`}
        >
          <div>
            <p>PT. Astra International Daihatsu Sales Operation Wilayah DKI2</p>
            <p>Jl. Yos Sudarso Kav 24, Sungai Bambu</p>
            <p>Tanjung Priuk, Jakarta Utara, DKI Jakarta, 14330</p>
          </div>
          <img
            className="footer-logo"
            src="/assets/images/logo_footer.png"
            alt="footer logo"
          />
        </div>
      </div>

      <p className="copy m-0 text-center text-white">
        &copy; {new Date().getFullYear()}. Sahabat Daihatsu Promo
      </p>
    </FooterSection>
  );
};

export default Footer;
