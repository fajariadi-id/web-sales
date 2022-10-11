import styled from "styled-components";

export const NavigationBar = styled.nav`
  background: ${({ showNav }) =>
    showNav ? "linear-gradient(to top, #2222224d, #33333300);" : "transparent"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: ${({ showNav }) => (showNav ? "blur(10px)" : null)};
  height: ${({ showNav, isMD }) =>
    showNav ? "80px" : isMD ? "80px" : "120px"};
  box-shadow: ${({ showNav }) => (showNav ? "0 7px 7px rgba(0,0,0,.2)" : null)};
  transition: all 0.5s ease;
  z-index: 999;

  & .menu-bar {
    cursor: pointer;
  }

  & img {
    height: ${({ isMD }) => (isMD ? "30px" : "50px")};
  }

  & .links {
    gap: 100px;

    & a {
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
  }
`;

export const LogoSidebar = styled.img`
  height: 30px;
`;

export const LinksSidebar = styled.div`
  gap: 30px;
  margin-top: 50px;
  & a {
    font-size: 14px;
    font-weight: 700;
    color: #222 !important;
    cursor: pointer;
    border-bottom: 1px solid #222;
    padding: 10px 20px;
    transition: all 0.3s ease;

    &:hover {
      color: #eb1d36 !important;
      border-bottom: 1px solid #3975bb;
      background-color: #3975bb4d;
      border-radius: 10px;
      text-shadow: 0 0 #2222224d;
      font-weight: 700;
    }
  }
`;

export const Typography = styled.h1`
  font-family: "Reenie Beanie", cursive;
  margin: 0;
  margin-top: 20px;
`;
