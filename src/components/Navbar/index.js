import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GlobalState from "../../context/globalState";
import { LinksSidebar, LogoSidebar, NavigationBar } from "./styled";
import ResponsiveBreakpoint from "../../helper/ResponsiveBreakpoints";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FaBars } from "react-icons/fa";
import CallToAction from "../CallToAction";

const Navbar = ({ navbarRef }) => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoint();
  // console.log("isSM", isSM);
  // console.log("isMD", isMD);
  // console.log("isLG", isLG);
  // console.log("isXL", isXL);
  // console.log("isXXL", isXXL);

  const [showNav, setShowNav] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(false);

  const nav = useRef();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  const handleScrollLink = (e) => {
    e.preventDefault();
    setShowMenuBar(false);

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <NavigationBar isMD={isMD} ref={nav} showNav={showNav}>
      <div className="container d-flex align-items-center justify-content-between h-100">
        {!showMenuBar && (
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setShowMenuBar(false);
              window.scrollTo({
                top: 0,
              });
            }}
          >
            <img src="/assets/images/logo.svg" alt="logo" />
          </a>
        )}

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

        {isMD && !showMenuBar && (
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
            <Offcanvas.Title>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  setShowMenuBar(false);
                  window.scrollTo({
                    top: 0,
                  });
                }}
              >
                <LogoSidebar src="/assets/images/logo.svg" alt="ssss" />
              </a>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <LinksSidebar className="d-flex flex-column">
              <a href="#promotion" onClick={(e) => handleScrollLink(e)}>
                Promo
              </a>
              <a href="#products" onClick={(e) => handleScrollLink(e)}>
                Produk
              </a>
            </LinksSidebar>

            <CallToAction sidebar />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </NavigationBar>
  );
};

export default Navbar;
