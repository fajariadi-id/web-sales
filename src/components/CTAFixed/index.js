import React from "react";
import styled from "styled-components";
import ResponsiveBreakpoints from "../../constant/ResponsiveBreakpoints";

const CTAFixed = ({ img, icon }) => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  return (
    <CTAButton
      isSM={isSM}
      isMD={isMD}
      isLG={isLG}
      isXL={isXL}
      isXXL={isXXL}
      img={img}
      icon={icon}
    >
      {img && (
        <a
          href="https://api.whatsapp.com/send?phone=6287875273454&text=Halo, saya tertarik untuk memiliki mobil Daihatsu."
          target="_blank"
          rel="noreferrer"
        >
          <img src={img} alt="cta-fixed" />
        </a>
      )}

      {icon && <a href="tel:087875273454">{icon}</a>}
    </CTAButton>
  );
};

const CTAButton = styled.div`
  background-color: ${({ img }) => (img ? "#00a884" : "#0DCAF0")};
  position: fixed;
  bottom: ${({ img, isMD }) =>
    img ? (isMD ? "90px" : "130px") : isMD ? "30px" : "50px"};
  left: 3%;
  z-index: 999;
  padding: ${({ img, isMD }) => (img ? "9px" : isMD ? "12px" : "18px")};
  border-radius: 999px;

  & img {
    width: ${({ isMD }) => (isMD ? "35px" : "50px")};
    height: ${({ isMD }) => (isMD ? "35px" : "50px")};
  }

  & .icon {
    width: ${({ isMD }) => (isMD ? "25px" : "30px")};
    height: ${({ isMD }) => (isMD ? "25px" : "30px")};
  }
`;

export default CTAFixed;
