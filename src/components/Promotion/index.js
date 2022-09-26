import React from "react";
import { PromoSection } from "./styled";
import bannerPromo from "../../assets/images/banners/promo.jpg";

const Promotion = () => {
  return (
    <PromoSection id="promotion" className="container">
      <h1 className="text-center">Promo Kami</h1>

      <div className="d-flex justify-content-between align-items-center">
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya mau tau informasi mengenai promo ini dong!"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bannerPromo} alt="promo" />
          </a>
        </article>
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya mau tau informasi mengenai promo ini dong!"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bannerPromo} alt="promo" />
          </a>
        </article>
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya mau tau informasi mengenai promo ini dong!"
            target="_blank"
            rel="noreferrer"
          >
            <img src={bannerPromo} alt="promo" />
          </a>
        </article>
      </div>
    </PromoSection>
  );
};

export default Promotion;
