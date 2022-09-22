import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Promotion from "../../components/Promotion";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSlider />
        <Promotion />
        <Products />
      </main>
    </>
  );
};

export default Home;
