import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/autoplay";

// import required modules
import { Autoplay } from "swiper";

import s from "./SwiperCarousel.module.scss";

const images = [
  { image: require("../../../../images/carousel/Frame2.png") },
  { image: require("../../../../images/carousel/Frame4.png") },
  { image: require("../../../../images/carousel/Frame7.png") },
];

const SwiperCarousel = () => {
  return (
    <Swiper
      spaceBetween={25}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={3}
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
