import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Pagination } from "swiper";

export default function CarouselData() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        observer={true}
        observeParents={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../../../../assests/landingPage/Blog.jpg" alt="f" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
