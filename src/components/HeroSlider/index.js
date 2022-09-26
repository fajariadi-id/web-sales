import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import terios from "../../assets/images/cars/terios.jpg";
import xenia from "../../assets/images/cars/xenia.jpg";
import rocky from "../../assets/images/cars/rocky.jpg";
import ResponsiveBreakpoints from "../../constant/ResponsiveBreakpoints";
import { HeroSection } from "./styled";

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
        <SwiperSlide>
          <img src={terios} alt="terios" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={xenia} alt="xenia" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rocky} alt="rocky" />
        </SwiperSlide>
      </Swiper>
    </HeroSection>
  );
};

export default HeroSlider;
