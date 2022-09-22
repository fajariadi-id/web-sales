import React from "react";
import HeroSlider from "../../components/HeroSlider";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <HeroSlider />
      </main>
    </>
  );
};

export default Home;
