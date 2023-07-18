import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import ResponsiveBreakpoints from "../../helper/ResponsiveBreakpoints";
import { HeroSection } from "./styled";
import heroImages from "../../assets/data/heroImages";

const HeroSlider = () => {
  const { isSM, isMD, isLG, isXL, isXXL } = ResponsiveBreakpoints();

  return (
    <HeroSection isMD={isMD} id="home">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className={`mySwiper ${
          isSM ? "isSM" : isMD ? "isMD" : isXL ? "isXL" : ""
        }`}
      >
        {heroImages.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroSection>
  );
};

export default HeroSlider;
