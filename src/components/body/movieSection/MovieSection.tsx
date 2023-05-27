"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideCompo from "./components/swiperSlide/SwiperSlideCompo";
import ScrollFramer from "./components/scrollFramer/ScrollFramer";
import styles from "./_movieSection.module.scss";

export default function MovieSection() {
  return (
    <div>
      <SwiperSlideCompo />
      <ScrollFramer />
    </div>
  );
}
