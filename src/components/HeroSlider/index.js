import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import terios from "../../assets/images/terios.jpg";
import xenia from "../../assets/images/xenia.jpg";
import rocky from "../../assets/images/rocky.jpg";

const HeroSlider = () => {
  return (
    <section id="hero">
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
        className="mySwiper"
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
    </section>
  );
};

export default HeroSlider;
