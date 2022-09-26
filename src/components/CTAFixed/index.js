import React from "react";
import styled from "styled-components";

const CTAFixed = ({ img, icon }) => {
  return (
    <CTAButton img={img} icon={icon}>
      {img && <img src={img} alt="cta-fixed" />}

      {icon && icon}
    </CTAButton>
  );
};

const CTAButton = styled.div`
  background-color: ${({ img, icon }) => (img ? "#00a884" : "#0DCAF0")};
  position: fixed;
  bottom: ${({ img, icon }) => (img ? "130px" : "50px")};
  left: 3%;
  z-index: 999;
  padding: ${({ img, icon }) => (img ? "10px" : "18px")};
  border-radius: 999px;

  & img {
    width: 50px;
    height: 50px;
  }

  & .icon {
    width: 30px;
    height: 30px;
  }
`;

export default CTAFixed;
