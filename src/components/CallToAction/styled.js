import styled from "styled-components";

export const SectionCTA = styled.section`
  padding: ${({ sidebar }) => (sidebar ? "30px 0" : "100px 0")};
  gap: ${({ sidebar }) => (sidebar ? "30px" : "50px")};

  & h1 {
    font-weight: bold;
    max-width: 580px;
    font-size: ${({ sidebar }) => (sidebar ? "24px" : "auto")} !important;
  }

  & p {
    max-width: 580px;
  }

  & .cta {
    width: 50%;
    min-width: ${({ sidebar }) => (sidebar ? "200px" : "300px")};
  }

  & .btn {
    border: none;
    padding: 10px 20px;
    margin-top: ${({ sidebar }) => (sidebar ? "20px" : "50px")};
    gap: 10px;
    font-family: "Poppins", sans-serif;
    font-size: ${({ isMD, isLG }) => (isMD ? "18px" : isLG ? "20px" : "24px")};
    font-weight: bold;
    border-radius: 10px;
    text-shadow: 0 1px #2222224d;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      transform: translateY(-3px);
    }

    &.btn-whatsapp {
      background-color: #00a884;
    }

    &.btn-phone {
      gap: 20px;
      background-color: #0dcaf0;
    }
  }

  & .whatsapp {
    width: ${({ isMD, isLG }) => (isMD ? "32px" : isLG ? "36px" : "42px")};
    height: ${({ isMD, isLG }) => (isMD ? "32px" : isLG ? "36px" : "42px")};
  }
`;
