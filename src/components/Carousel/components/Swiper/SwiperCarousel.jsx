import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import s from "./SwiperCarousel.module.scss";

const images = [
  { image: require("../../../../images/carousel/Frame2.png") },
  { image: require("../../../../images/carousel/Frame4.png") },
  { image: require("../../../../images/carousel/Frame7.png") },
];

const SwiperCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className={s.image} src={images[0].image} />
      </SwiperSlide>

      <SwiperSlide>
        <img className={s.image} src={images[1].image} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.image} src={images[2].image} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.image} src={images[0].image} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.image} src={images[1].image} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={s.image} src={images[2].image} />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel;