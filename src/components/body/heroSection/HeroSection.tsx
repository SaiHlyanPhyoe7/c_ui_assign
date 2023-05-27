"use client";

import React, { useEffect, useRef } from "react";
import styles from "./_heroSection.module.scss";
import { IconApple, IconBrandApple } from "@tabler/icons-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const bodyVdText = document.querySelector(
        `.${styles.body_vd_text}`
      ) as HTMLElement;
      if (video && bodyVdText) {
        const scrollY = window.scrollY || window.pageYOffset;
        // console.log("Scroll Y is:", scrollY);
        video.style.transform = `translateY(-${scrollY * 0.3}px)`;

        const opacity = 1 - scrollY / 500;
        const vdOpacity = 1 - scrollY / 800;
        bodyVdText.style.opacity = opacity.toString();
        video.style.opacity = vdOpacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.body_hero_section}>
      <video ref={videoRef} autoPlay muted loop>
        <source src='/videos/natureVd.mp4' type='video/mp4' />
      </video>
      <div className={styles.body_vd_text}>
        <div></div>
        <div>
          <h1>
            All Apple Originals.
            <br />
            Only on Apple TV+.
          </h1>
          <button>Stream now</button>
        </div>
        <p>
          Watch on the <IconBrandApple /> TV App
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
