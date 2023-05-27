import React from "react";
import styles from "./_adsSection.module.scss";
import { ads } from "@/constants/adsSection/adsSection";
import { IconChevronRight } from "@tabler/icons-react";

const AdsSection = () => {
  return (
    <div className={styles.body_ads_section}>
      <div className={styles.ads_a}>
        <h2>New Apple Originals every month.</h2>
        <h2>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </h2>
        <h2>Share Apple TV+ with your family</h2>
      </div>
      <div className={styles.ads_grid}>
        {ads.map((item) => {
          return (
            <div key={item.id} className={styles.ads_b}>
              <h3>{item.subTitle}</h3>
              <h1>{item.title}</h1>
              <p>
                {item.desc} {item.id === 3 && <span>Learn more</span>}
              </p>
              <button>{item.btnTxt}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdsSection;
