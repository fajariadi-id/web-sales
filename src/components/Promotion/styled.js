import styled from "styled-components";

export const PromoSection = styled.section`
  padding: 50px 0 80px 0;

  & h1 {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 30px;
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
