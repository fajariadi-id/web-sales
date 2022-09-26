import styled from "styled-components";

export const HeroSection = styled.section`
  margin-top: ${({ isMD }) => (isMD ? "80px" : null)};
`;
