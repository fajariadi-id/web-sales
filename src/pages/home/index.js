import React, { useEffect, useState } from "react";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";
import HeroSlider from "../../components/HeroSlider";
import Navbar from "../../components/Navbar";
import Products from "../../components/Products";
import Promotion from "../../components/Promotion";
import { FaPhoneAlt } from "react-icons/fa";
import CTAFixed from "../../components/CTAFixed";
import { Modal } from "react-bootstrap";
import SplashScreen from "../../components/SplashScreen";
import Loading from "../../components/Loading";
import styled from "styled-components";

const Home = () => {
  const [splash, setSplash] = useState(false);
  const [loading, setLoading] = useState(false);
  const [navRef, setNavRef] = useState(null);

  useEffect(() => {
    setSplash(true);
    setTimeout(() => {
      setLoading(true);
      setSplash(false);
    }, 500);

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Container loading={loading}>
      {splash && <SplashScreen />}

      {!splash && (
        <>
          {loading && <Loading />}

          <Navbar navbarRef={(ref) => setNavRef(ref)} />
          <CTAFixed img="/assets/images/whatsapp.svg" />
          <CTAFixed icon={<FaPhoneAlt className="icon" color="#f6f6f4" />} />

          <main className="position-relative">
            <HeroSlider />
            <Promotion />
            <Products />
            <CallToAction />
            <Footer nav={navRef} />
          </main>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow-y: ${({ loading }) => (loading ? "hidden" : "auto")};
  max-height: ${({ loading }) => (loading ? "100vh" : "auto")};
`;

export default Home;
