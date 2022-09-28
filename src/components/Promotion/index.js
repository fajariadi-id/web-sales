import React from "react";
import { PromoSection } from "./styled";
import bannerPromo from "../../assets/images/banners/promo.jpg";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";

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

      <div
        className={`container ${isMD && "md"} ${isXL && "xl"} ${
          isXXL && "xxl"
        }`}
      >
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6287875273454&text=Halo, saya tertarik dengan promo instant approval All New Xenia DP 12juta."
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/banner_promo/banner1.jpg" alt="promo" />
          </a>
        </article>
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6287875273454&text=Halo, saya tertarik dengan promo All New Xenia."
            target="_blank"
            rel="noreferrer"
          >
            <video autoPlay muted loop>
              <source
                src="/assets/videos/banner_promo/banner_xenia.mp4"
                type="video/mp4"
              />
            </video>
          </a>
        </article>
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6287875273454&text=Halo, saya tertarik dengan promo akhir tahun."
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/images/banner_promo/banner2.jpg" alt="promo" />
          </a>
        </article>
      </div>
    </PromoSection>
  );
};

export default Promotion;
