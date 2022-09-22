import styled from "styled-components";

export const NavigationBar = styled.nav`
  background: ${({ showNav }) =>
    showNav ? "linear-gradient(to top, #2222224d, #33333300);" : "transparent"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: ${({ showNav }) => (showNav ? "blur(10px)" : null)};
  height: ${({ showNav }) => (showNav ? "80px" : "120px")};
  box-shadow: ${({ showNav }) => (showNav ? "0 7px 7px rgba(0,0,0,.2)" : null)};
  transition: all 0.5s ease;
  z-index: 999;

  & img {
    height: 50px;
  }

  & .links {
    gap: 100px;
  }

  & a {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #f6f6f4 !important;
    text-shadow: 0 2px #2222224d;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #3975bb !important;
      text-shadow: 0 0 #2222224d;
      font-weight: 700;
    }
  }
`;
