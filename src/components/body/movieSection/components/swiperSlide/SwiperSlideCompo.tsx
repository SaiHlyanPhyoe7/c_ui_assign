"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./_swiperSlide.module.scss";

// import required modules
import Image from "next/image";

SwiperCore.use([Navigation, Pagination]);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function SwiperSlideCompo() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation
        autoplay
        pagination={false}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className='mySwiper'
      >
        {arr.map((item) => {
          return (
            <SwiperSlide key={item}>
              <Image
                className={styles.image_wrapper}
                width={500}
                height={500}
                src='/img/movie.png'
                alt='Movie Image'
              />
              <button className={styles.stream_now_button}>Stream Now</button>
              <p className={styles.desc}>Movie name or decs here</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
