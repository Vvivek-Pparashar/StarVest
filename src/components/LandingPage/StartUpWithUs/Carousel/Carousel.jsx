import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
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
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper-startups"
      >
        <SwiperSlide className="swiperSlide-startups">Slide 1</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 2</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 3</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 4</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 5</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 6</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 7</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 8</SwiperSlide>
        <SwiperSlide className="swiperSlide-startups">Slide 9</SwiperSlide>

        <div className="slider-controler-startups">
          <div className="swiper-button-prev slider-arrow-startups">
            <ArrowBackIosNewIcon color="white" style={{ color: "white" }} />
          </div>
          <div className="swiper-button-next slider-arrow-startups">
            <ArrowForwardIosIcon color="white" style={{ color: "white" }} />
          </div>
        </div>
      </Swiper>
    </>
  );
}
