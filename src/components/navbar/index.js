import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalState from "../../context/globalState";
import { NavigationBar } from "./styled";

const Navbar = () => {
  const { count, setCount } = useContext(GlobalState);
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);

  const nav = useRef();

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
    <NavigationBar ref={nav} showNav={showNav}>
      <div className="container d-flex align-items-center justify-content-between h-100">
        <a href="#home">
          <img src="/assets/images/logo.svg" alt="" />
        </a>

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
      </div>
    </NavigationBar>
  );
};

export default Navbar;
