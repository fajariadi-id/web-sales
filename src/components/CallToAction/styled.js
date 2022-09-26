import styled from "styled-components";

export const SectionCTA = styled.section`
  padding: 100px 0;
  gap: 50px;

  & h1 {
    font-weight: bold;
  }

  & p {
    max-width: 580px;
  }

  & .cta {
    width: 30%;
    min-width: 300px;
  }

  & .btn-whatsapp {
    background-color: #00a884;
    border: none;
    padding: 10px 20px;
    margin-top: 50px;
    gap: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: bold;
    border-radius: 10px;
    text-shadow: 0 1px #2222224d;
    transition: all 0.3s ease;

    &:hover {
      background-color: #00a884;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
  }

  & .whatsapp {
    width: 42px;
    height: 42px;
  }
`;
