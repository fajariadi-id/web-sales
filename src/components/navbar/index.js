import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalState from "../../context/globalState";
import { NavigationBar } from "./styled";
import ResponsiveBreakpoint from "../../constant/ResponsiveBreakpoints";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FaBars } from "react-icons/fa";

const Navbar = ({ navbarRef }) => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoint();
  console.log("isSM", isSM);
  console.log("isMD", isMD);
  console.log("isLG", isLG);
  console.log("isXL", isXL);
  console.log("isXXL", isXXL);

  const [showNav, setShowNav] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(false);

  const nav = useRef();

  const handleScrollLink = (e) => {
    e.preventDefault();
    setShowMenuBar(false);

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
      const navbarHeight = isMD ? 80 : 120;
      // 120 -> navbar height
      window.pageYOffset > navbarHeight ? setShowNav(true) : setShowNav(false);
    };
    window.addEventListener("scroll", scrollNav);

    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);

  useEffect(() => {
    navbarRef(nav);
  }, [window.pageYOffset]);

  return (
    <NavigationBar isMD={isMD} ref={nav} showNav={showNav}>
      <div className="container d-flex align-items-center justify-content-between h-100">
        <a href="#home">
          <img src="/assets/images/logo.svg" alt="" />
        </a>

        {!isMD && (
          <div className="links d-flex align-items-center">
            <a href="#promotion" onClick={(e) => handleScrollLink(e)}>
              Promo
            </a>
            <a href="#products" onClick={(e) => handleScrollLink(e)}>
              Produk
            </a>
            <a href="#contact" onClick={(e) => handleScrollLink(e)}>
              Kontak
            </a>
          </div>
        )}

        {isMD && (
          <FaBars
            onClick={() => setShowMenuBar(!showMenuBar)}
            className="menu-bar"
            size={20}
            color="#EB1D36"
          />
        )}

        <Offcanvas
          show={showMenuBar}
          onHide={() => setShowMenuBar(!showMenuBar)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="sidebar d-flex flex-column align-items-center">
              <a href="#promotion" onClick={(e) => handleScrollLink(e)}>
                Promo
              </a>
              <a href="#products" onClick={(e) => handleScrollLink(e)}>
                Produk
              </a>
              <a href="#contact" onClick={(e) => handleScrollLink(e)}>
                Kontak
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </NavigationBar>
  );
};

export default Navbar;
