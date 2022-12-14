import styled from "styled-components";

export const SectionProducts = styled.section`
  & h1 {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 30px;
  }

  & .parallax {
    padding: 100px 0;
  }

  & .container {
    margin: 50px auto;
  }

  & .products {
    display: grid;
    grid-template-columns: ${({ isXXL, isXL, isMD }) =>
      isMD
        ? "1fr"
        : isXL
        ? "1fr 1fr"
        : isXXL
        ? "1fr 1fr 1fr"
        : "1fr 1fr 1fr 1fr"};
    gap: 30px;
  }
`;
