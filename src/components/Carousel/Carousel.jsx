import React from "react";

import s from "./Carousel.module.scss";

import SwiperCarousel from "./components/Swiper/SwiperCarousel";
import VignetteEffect from "./components/VignetteEffect/VignetteEffect";

const Carousel = () => {
  return (
    <div className={s.carousel}>
      <div className={s.effectLeft}>{/* <VignetteEffect /> */}</div>
      <div className={s.effectRight}>{/* <VignetteEffect /> */}</div>

      <div className={s.swipercarousel}>
        <SwiperCarousel />
      </div>
    </div>
  );
};

export default Carousel;
