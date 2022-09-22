import React from "react";
import { ArticleCard } from "./styled";
import productXenia from "../../../assets/images/cars/productXenia.png";

const ProductCard = () => {
  return (
    <ArticleCard className="d-flex justify-content-center align-items-center">
      <img src={productXenia} alt="Xenia" />
    </ArticleCard>
  );
};

export default ProductCard;
