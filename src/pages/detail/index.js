import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import products from "../../assets/data/products";
import CallToAction from "../../components/CallToAction";
import CTAFixed from "../../components/CTAFixed";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import SplashScreen from "../../components/SplashScreen";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";
import useDocumentTitle from "../../helper/useDocumentTitle";

const Detail = () => {
  const [navRef, setNavRef] = useState(null);
  const [carDetail, setCarDetail] = useState({});

  const { car } = useParams();
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  const getCarDetail = () => {
    const findCar = products.find(
      (item) => item.name.toLowerCase().split(" ").join("-") === car
    );

    setCarDetail(findCar);
  };

  useDocumentTitle(`${carDetail?.name} | Daihatsu`);

  useEffect(() => {
    if (!car) return;

    getCarDetail();
  }, [car]);

  const [splash, setSplash] = useState(false);
  const [loading, setLoading] = useState(false);

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

          <DetailProduct
            isSM={isSM}
            isMD={isMD}
            isLG={isLG}
            isXL={isXL}
            isXXL={isXXL}
          >
            <img
              className="banner"
              src={carDetail.banner}
              alt={carDetail.name}
            />

            <CallToAction />
            <Footer nav={navRef} />
          </DetailProduct>
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

const DetailProduct = styled.main`
  & .banner {
    margin-top: ${({ isMD }) => (isMD ? "80px" : null)};
    height: ${({ isSM, isMD, isXL }) =>
      isSM ? "30vh" : isMD ? "50vh" : isXL ? "70vh" : "100vh"};
    object-fit: cover;
  }
`;

export default Detail;
