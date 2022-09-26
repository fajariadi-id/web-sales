import React, { useState } from "react";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";
import HeroSlider from "../../components/HeroSlider";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Promotion from "../../components/Promotion";
import { FaPhoneAlt } from "react-icons/fa";
import CTAFixed from "../../components/CTAFixed";

const Home = () => {
  const [navRef, setNavRef] = useState(null);

  return (
    <>
      <Navbar navbarRef={(ref) => setNavRef(ref)} />
      <CTAFixed img="/assets/images/whatsapp.svg" />
      <CTAFixed icon={<FaPhoneAlt className="icon" color="#f6f6f4" />} />

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
