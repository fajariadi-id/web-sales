import React from "react";
import { PromoSection } from "./styled";
import bannerPromo from "../../assets/images/banners/promo.jpg";
import ResponsiveBreakpoints from "../../constant/ResponsiveBreakpoints";

const Promotion = () => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  return (
    <PromoSection
      isSM={isSM}
      isMD={isMD}
      isLG={isLG}
      isXL={isXL}
      isXXL={isXXL}
      id="promotion"
      className="container"
    >
      <h1 className="text-center">Promo Kami</h1>

      <div className="container">
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya tertarik untuk memiliki mobil Daihatsu."
            target="_blank"
            rel="noreferrer"
          >
            <img src={bannerPromo} alt="promo" />
          </a>
        </article>
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya tertarik untuk memiliki mobil Daihatsu."
            target="_blank"
            rel="noreferrer"
          >
            <img src={bannerPromo} alt="promo" />
          </a>
        </article>
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6285156493801&text=Halo, saya tertarik untuk memiliki mobil Daihatsu."
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
