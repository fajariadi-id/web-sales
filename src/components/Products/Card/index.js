import React, { useRef } from "react";
import { ArticleCard, Triangle } from "./styled";
import productXenia from "../../../assets/images/cars/productXenia.png";
import { Button } from "react-bootstrap";

const ProductCard = () => {
  const whatsappRef = useRef();

  return (
    <ArticleCard className="d-flex justify-content-center align-items-center">
      <img src={productXenia} alt="Xenia" />
      {/* <Triangle></Triangle> */}
      <div className="product-label">
        <span>All New Xenia</span>
        <div className="triangle"></div>
      </div>

      <div className="btn-container d-flex justify-content-center">
        <a
          ref={whatsappRef}
          href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya tertarik untuk memiliki mobil Daihatsu."
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

        <Button className="btn btn-detail d-flex align-items-center">
          <img className="info" src="/assets/images/info.svg" alt="info" />
          Informasi
        </Button>
      </div>
    </ArticleCard>
  );
};

export default ProductCard;
