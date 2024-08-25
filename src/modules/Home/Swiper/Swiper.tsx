"use client";
import { Swiper as Sw, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.scss";

interface SwiperProps {
  items: JSX.Element[];
}

export const Swiper = ({ items }: SwiperProps) => {
  return (
    <Sw
      modules={[Pagination, Autoplay]}
      className="my-swiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      loop
      speed={1000}
      slidesPerView={1}
    >
      {items.map((item) => (
        <SwiperSlide key={item.key}>{item}</SwiperSlide>
      ))}
    </Sw>
  );
};
