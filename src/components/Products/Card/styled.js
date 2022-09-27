import styled from "styled-components";

export const ArticleCard = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background-color: #f6f6f4;
  height: 280px;
  /* width: 280px; */

  & .product-img {
    width: ${({ isMD, isXL }) => (isMD ? "70%" : isXL ? "90%" : "100%")};
    transition: all 0.3s ease;
  }

  &:hover .product-img {
    transform: scale(1.1);
  }

  & .product-label {
    background-color: #eb1d36;
    position: absolute;
    top: 20px;
    left: 0;
    padding: 3px 50px 3px 20px;

    & span {
      font-family: "Poppins", sans-serif;
      font-weight: bold;
      color: #f6f6f4;
    }

    & .triangle {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 15px 15px 15px 0;
      border-color: transparent #f6f6f4 transparent transparent;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  & .btn-container {
    background: linear-gradient(to top, #22222280, #33333300);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    transform: translateY(100%);
    transition: all 0.5s ease;
    gap: 10px;

    & .btn-whatsapp {
      background-color: #00a884;
      border: none;
    }

    & .btn-detail {
      background-color: #0dcaf0;
      border: none;
    }

    & .btn {
      gap: 5px;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      border-radius: 10px;
      flex: 1;
      text-shadow: 0 2px #2222224d;
    }

    & .whatsapp {
      width: 20px;
      height: 20px;
    }

    & .info {
      width: 16px;
      height: 16px;
    }
  }

  &:hover .btn-container {
    transform: translateY(0);
  }
`;
