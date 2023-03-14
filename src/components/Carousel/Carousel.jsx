import React from "react";

import s from "./Carousel.module.scss";

import SwiperCarousel from "./components/Swiper/SwiperCarousel";

const Carousel = () => {
  return (
    <div className={s.carousel}>
      <div className={s.effectLeft}></div>
      <div className={s.effectRight}></div>
      <div className={s.swipercarousel}>
        <SwiperCarousel />
      </div>
    </div>
  );
};

export default Carousel;
