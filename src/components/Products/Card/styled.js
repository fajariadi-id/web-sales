import styled from "styled-components";

export const ArticleCard = styled.article`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  background-color: #f6f6f4;
  height: 280px;
  width: 280px;

  & img {
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
