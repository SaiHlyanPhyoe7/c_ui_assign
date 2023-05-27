"use client";

import React, { useEffect, useRef } from "react";
import styles from "./_subNavbar.module.scss";

const SubNavbar = () => {
  const subNavbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const subNavbar = subNavbarRef.current;
      if (subNavbar) {
        const { top } = subNavbar.getBoundingClientRect();
        console.log(top);
        if (top <= 0) {
          subNavbar.classList.add(styles.sticky);
        } else {
          subNavbar.classList.remove(styles.sticky);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.body_sub_nav} ref={subNavbarRef}>
      <div>
        <h1>AppleTV+</h1>
        <button>Stream now</button>
      </div>
    </div>
  );
};

export default SubNavbar;
