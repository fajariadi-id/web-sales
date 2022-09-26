import React, { useState } from "react";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";
import HeroSlider from "../../components/HeroSlider";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Promotion from "../../components/Promotion";

const Home = () => {
  const [navRef, setNavRef] = useState(null);

  return (
    <>
      <Navbar navbarRef={(ref) => setNavRef(ref)} />

      <main>
        <HeroSlider />
        <Promotion />
        <Products />
        <CallToAction />
        <Footer nav={navRef} />
      </main>
    </>
  );
};

export default Home;
