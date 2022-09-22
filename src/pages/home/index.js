import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Navbar from "../../components/Navbar";
import Promotion from "../../components/Promotion";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSlider />
        <Promotion />
      </main>
    </>
  );
};

export default Home;
