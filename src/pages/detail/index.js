import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import CallToAction from "../../components/CallToAction";
import CTAFixed from "../../components/CTAFixed";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Navbar from "../../components/Navbar";
import SplashScreen from "../../components/SplashScreen";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";
import useDocumentTitle from "../../helper/useDocumentTitle";
import Marquee from "react-fast-marquee";
import { Button } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";

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
              <div className="detail-highlight d-flex flex-column align-items-center">
                <div className="category d-flex align-items-center justify-content-center">
                  <span>Warna</span>
                  <span>Harga</span>
                  <span>Model</span>
                </div>

                <a
                  href="/assets/documents/cliff-daihatsu-pricelist-2023.xlsx"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white brosur mx-auto"
                >
                  <Button className="btn-brosur w-100">Lihat Price List</Button>
                </a>

                {state?.hasIndependentBrosur && (
                  <a
                    style={{ marginTop: -25 }}
                    href="/assets/documents/brosurs/terios-brosur.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white brosur mx-auto"
                  >
                    <Button className="btn-brosur w-100">Lihat Brosur</Button>
                  </a>
                )}
              </div>

              <Marquee
                className="colors"
                gradientWidth={0}
                direction="right"
                speed={20}
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

              <Marquee className="price" gradientWidth={0} speed={60}>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/accent.svg" alt="accent" />
                  <p className="text-center">
                    Harga mulai dari<span className="devider"></span>
                    <CurrencyFormat
                      value={state.startPrice}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp"}
                    />
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/accent.svg" alt="accent" />
                  <p className="text-center">
                    Harga mulai dari<span className="devider"></span>
                    <CurrencyFormat
                      value={state.startPrice}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp"}
                    />
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/assets/images/accent.svg" alt="accent" />
                  <p className="text-center">
                    Harga mulai dari<span className="devider"></span>
                    <CurrencyFormat
                      value={state.startPrice}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                      prefix={"Rp"}
                    />
                  </p>
                </div>
              </Marquee>

              <Marquee
                className="models"
                gradientWidth={0}
                direction="right"
                speed={60}
              >
                {state.models.map((item, index) => (
                  <div key={index} className="d-flex flex-column">
                    <p className="model">{item.name}</p>
                    <p className="type">{item.transmisionType}</p>
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

    & .category {
      gap: 10px;

      & span {
        color: #222;
        margin-top: -10px;
        border-radius: 5px;
        padding: 3px 5px;

        &:nth-child(1) {
          background-color: #3975bb;
          color: #f6f6f4;
        }
        &:nth-child(2) {
          /* background-color: green; */
        }
        &:nth-child(3) {
          background-color: #eb1d36;
          color: #f6f6f4;
        }
      }
    }

    & .price {
      background-color: #f6f6f4;
      color: #222;

      & div {
        img {
          height: ${({ isMD }) => (isMD ? "40px" : "70px")};
          width: ${({ isMD }) => (isMD ? "40px" : "70px")};
        }
      }

      & p {
        margin: 0;
        font-size: ${({ isMD }) => (isMD ? "18px" : "36px")};
        font-weight: bold;
        padding: ${({ isMD }) => (isMD ? "0 20px" : "0 50px")};

        & .devider {
          display: inline-block;
          background-color: #eb1d36;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
          height: 20px;
          width: 20px;
          border-radius: 999px;
          margin: 0 30px 0 10px;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            border-radius: 999px;
            height: 20px;
            width: 20px;
            right: -20px;
            bottom: 0;
            z-index: -1;
            background-color: #3975bb;
          }
        }
      }
    }

    & .models {
      background-color: #eb1d36;

      /* margin-bottom: ${({ isMD }) => (isMD ? "-60px" : "-100px")}; */

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

  & .detail-highlight {
    width: fit-content;
    margin: 0 auto;
  }

  & .brosur {
    width: 100%;
    margin: 10px 0 30px 0;
    padding: 3px 0;
    border-radius: 10px;
    background: linear-gradient(to right, #3975bb, #eb1d36);
    border: none;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }

    & .btn-brosur {
      background-color: transparent;
      border: none;
    }
  }
`;

export default Detail;
