import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/autoplay";
import { Autoplay } from "swiper";

import s from "./SwiperCarousel.module.scss";

const images = [
  { image: require("../../../../images/carousel/9.png") },
  { image: require("../../../../images/carousel/1.png") },
  { image: require("../../../../images/carousel/2.png") },
  { image: require("../../../../images/carousel/3.png") },
  { image: require("../../../../images/carousel/4.png") },
  { image: require("../../../../images/carousel/5.png") },
  { image: require("../../../../images/carousel/6.png") },
  { image: require("../../../../images/carousel/7.png") },
  { image: require("../../../../images/carousel/8.png") },
];

const SwiperCarousel = () => {
  return (
    <Swiper
      spaceBetween={25}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      modules={[Autoplay]}
      className="mySwiper"
      autoHeight={true}
      calculateHeight={true}
      breakpoints={{
        100: {
          spaceBetween: 10,
        },

        480: {
          spaceBetween: 20,
        },

        768: {
          spaceBetween: 25,
        },
      }}
    >
      {images.map(image => (
        <SwiperSlide key={image.image}>
          <img
            className={s.image}
            src={image.image}
            alt={image.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
