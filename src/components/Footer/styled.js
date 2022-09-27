import styled from "styled-components";

export const FooterSection = styled.footer`
  & .footer {
    background-color: #f6f6f4;
    box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
    padding: 50px 64px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    gap: 30px;

    & a {
      font-size: 18px;
      font-weight: 700;
      color: inherit;
      /* text-shadow: 0 2px #2222224d; */
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        color: #3975bb !important;
        /* text-shadow: 0 0 #2222224d; */
        font-weight: 700;
      }
    }

    & .profile {
      gap: 20px;

      & .img-container {
        width: 164px;
        height: 164px;
        border-radius: 999px;
        overflow: hidden;
      }

      & .name {
        font-weight: bold;
      }
    }

    & .product {
      & div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        font-family: "Poppins", sans-serif;

        & p {
          cursor: pointer;
          min-width: 110px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    & .links {
      gap: 30px;
    }
  }

  & .copy {
    background-color: #eb1d36;
    font-size: 14px;
    padding: 5px 0;
  }
`;
