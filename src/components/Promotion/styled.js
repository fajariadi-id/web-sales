import styled from "styled-components";

export const PromoSection = styled.section`
  padding: 50px 0 80px 0;

  & video {
    border-radius: 20px;
    width: 100%;
    transform: translateY(0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);
    }

    /* max-height: 500px; */
  }

  & h1 {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 30px;
  }

  & div {
    display: grid;
    gap: 30px;
    grid-template-areas: "banner1 video banner2";
    align-items: ${({ isXXL, isXL, isMD }) => (isXL ? "start" : "center")};
    grid-template-columns: ${({ isXXL, isXL, isMD }) =>
      isMD ? "1fr" : isXL ? "1fr 1fr" : "1fr 1fr 1fr"};

    &.md.xl.xxl {
      grid-template-areas:
        "video"
        "banner1"
        "banner2";
    }

    &.xl.xxl {
      grid-template-areas:
        "banner1 video"
        "banner2 video";
    }

    &.xxl {
      grid-template-areas: "banner1 video banner2";
    }

    & article:nth-child(1) {
      grid-area: banner1;
    }

    & article:nth-child(2) {
      grid-area: video;
    }

    & article:nth-child(3) {
      grid-area: banner2;
    }
  }

  & img {
    border-radius: 20px;
    transform: translateY(0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 7px 7px rgba(0, 0, 0, 0.1);
    }
  }
`;
