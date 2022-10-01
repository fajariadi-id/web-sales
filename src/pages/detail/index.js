import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
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
import Marquee from "react-fast-marquee";

const Detail = () => {
  const [navRef, setNavRef] = useState(null);

  const { state } = useLocation();

  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  useDocumentTitle(`${state?.name} | Sahabat Daihatsu Promo`);

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
            <img className="banner" src={state.banner} alt={state.name} />

            <section className="variant">
              <h1 className="text-center">Daihatsu {state.name}</h1>
              <span className="d-block text-center">Model dan Warna</span>

              <Marquee className="models" gradientWidth={0} speed={20}>
                {state.models.map((item, index) => (
                  <div key={index} className="d-flex flex-column">
                    <p className="model">{item.name}</p>
                    <p className="type">{item.transmisionType}</p>
                  </div>
                ))}
              </Marquee>

              <Marquee
                className="colors"
                gradientWidth={0}
                direction="right"
                speed={70}
              >
                {state.colors.map((item, index) => (
                  <div key={index}>
                    <img src={item.image} alt={item.name} />

                    <div className="color">
                      <p className="text-center">{item.name}</p>
                    </div>
                  </div>
                ))}
              </Marquee>
            </section>

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

  & .variant {
    margin-top: 70px;
    color: #f6f6f4;
    font-family: "Poppins", sans-serif;

    & h1 {
      color: #222;
      font-weight: bold;
    }

    & span {
      color: #222;
      margin-top: -10px;
      margin-bottom: 30px;
    }

    & .models {
      background-color: #eb1d36;

      margin-bottom: ${({ isMD }) => (isMD ? "-60px" : "-100px")};

      & div {
        /* margin: 0 30px; */
        margin-right: 50px;
        padding: ${({ isMD }) => (isMD ? "5px 0" : "10px 0")};

        & .model {
          margin: 0;
          font-size: ${({ isMD }) => (isMD ? "18px" : "36px")};
          font-weight: bold;
        }

        & .type {
          margin: 0;
          font-size: ${({ isMD }) => (isMD ? "12px" : "18px")};
          align-self: end;
        }
      }
    }

    & .colors {
      /* margin-top: -100px; */
      & div {
        /*  */
        & img {
          max-width: ${({ isMD }) => (isMD ? "300px" : "500px")};
          padding: ${({ isMD }) => (isMD ? "0 20px" : "0 50px")};
        }

        /* color name */
        & .color {
          margin-top: ${({ isMD }) => (isMD ? "-20px" : "-30px")};
          background-color: #3975bb;

          & p {
            padding: 10px 0;
            margin-bottom: 0;
            /* margin-left: -100px; */
            font-size: ${({ isMD }) => (isMD ? "18px" : "36px")};
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default Detail;
