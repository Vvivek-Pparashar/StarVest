import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./News.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper-carousel"
      >
        <SwiperSlide className="swiperSlide-news">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 2</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 3</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 4</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 5</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 6</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 7</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 8</SwiperSlide>
        <SwiperSlide className="swiperSlide-news">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
