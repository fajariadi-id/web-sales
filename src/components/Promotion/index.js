import React from "react";
import { PromoSection } from "./styled";
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
            href="https://api.whatsapp.com/send?phone=6287875273454&text=Halo, saya tertarik dengan product New Terios. Bisa kirimkan brosurnya?"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ width: 352, height: 352, objectFit: "cover" }}
              src="/assets/images/banner_promo/banner1.jpg"
              alt="promo"
            />
          </a>
        </article>
        <article>
          <a
            href="https://api.whatsapp.com/send?phone=6287875273454&text=Halo, saya tertarik dengan product All New Ayla."
            target="_blank"
            rel="noreferrer"
          >
            <video autoPlay muted loop>
              <source
                src="/assets/videos/banner_promo/banner_new_ayla.mp4"
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
            <img src="/assets/images/banner_promo/banner2.png" alt="promo" />
          </a>
        </article>
      </div>
    </PromoSection>
  );
};

export default Promotion;
