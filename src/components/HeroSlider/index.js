import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import terios from "../../assets/images/terios.jpg";
import xenia from "../../assets/images/xenia.jpg";
import rocky from "../../assets/images/rocky.jpg";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
    </>
  );
};

export default HeroSlider;
