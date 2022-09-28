import React, { useRef } from "react";
import { ArticleCard, Triangle } from "./styled";
import productXenia from "../../../assets/images/cars/productXenia.png";
import { Button } from "react-bootstrap";
import ResponsiveBreakpoints from "../../../helper/ResponsiveBreakpoints";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalState from "../../../context/globalState";

const ProductCard = ({ product }) => {
  const { setCar } = useContext(GlobalState);
  const whatsappRef = useRef();
  const navigate = useNavigate();

  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();
  const carNameSlug = product.name.toLowerCase().split(" ").join("-");

  const handleDetail = () => {
    setCar(product);
    navigate(`/${carNameSlug}`);
  };

  return (
    <ArticleCard
      isSM={isSM}
      isMD={isMD}
      isLG={isLG}
      isXL={isXL}
      isXXL={isXXL}
      className="d-flex justify-content-center align-items-center"
    >
      <img className="product-img" src={product.image} alt={product.name} />
      {/* <Triangle></Triangle> */}
      <div className="product-label">
        <span>{product.name}</span>
        <div className="triangle"></div>
      </div>

      <div className="btn-container d-flex justify-content-center">
        <a
          ref={whatsappRef}
          href={`https://api.whatsapp.com/send?phone=6287875273454&text=Halo, saya tertarik untuk memiliki mobil Daihatsu ${product.name}.`}
          target="_blank"
          rel="noreferrer"
        ></a>

        <Button
          onClick={() => whatsappRef.current.click()}
          className="btn btn-whatsapp d-flex align-items-center"
        >
          <img
            className="whatsapp"
            src="/assets/images/whatsapp.svg"
            alt="whatsapp"
          />
          Whatsapp
        </Button>

        <Button
          onClick={handleDetail}
          className="btn btn-detail d-flex align-items-center"
        >
          <img className="info" src="/assets/images/info.svg" alt="info" />
          Informasi
        </Button>
      </div>
    </ArticleCard>
  );
};

export default ProductCard;
