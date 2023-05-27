import React from "react";
import styles from "./_brandSection.module.scss";
import apple_tv_app_icon from "../../../assets/brand/apple_tv_app_icon.png";
import apple_tv from "../../../assets/icon_apple_tv.jpg";
import apple_iph from "../../../assets/icon_iphone.jpg";
import apple_ipad from "../../../assets/icon_ipad.jpg";
import apple_mac from "../../../assets/icon_mac.jpg";
import apple_airplay from "../../../assets/icon_airplay.jpg";
import smg from "../../../assets/brand/icon_samsung.jpg";
import lg from "../../../assets/brand/icon_lg.jpg";
import vizio from "../../../assets/brand/icon_vizio.jpg";
import sony from "../../../assets/brand/icon_sony.jpg";
import xfinity from "../../../assets/brand/icon_xfinity.jpg";
import roku from "../../../assets/brand/icon_roku.jpg";
import fireTv from "../../../assets/brand/icon_firetv.jpg";
import googleTv from "../../../assets/brand/icon_google_tv.jpg";
import playstationTv from "../../../assets/brand/icon_playstation.jpg";
import xbox from "../../../assets/brand/icon_xbox.jpg";
import Image from "next/image";

const item = [
  { id: 1, icon: apple_tv, title: "Apple TV" },
  { id: 2, icon: apple_iph, title: "iPhone" },
  { id: 3, icon: apple_ipad, title: "iPad" },
  { id: 4, icon: apple_mac, title: "Mac" },
  { id: 5, icon: apple_airplay, title: "AirPlay" },
];

const brandImg = [
  { id: 1, icon: smg },
  { id: 2, icon: lg },
  { id: 3, icon: vizio },
  { id: 4, icon: sony },
  { id: 5, icon: xfinity },
  { id: 6, icon: roku },
  { id: 7, icon: fireTv },
  { id: 8, icon: googleTv },
  { id: 9, icon: playstationTv },
  { id: 10, icon: xbox },
];

const BrandSection = () => {
  return (
    <div className={styles.body_brand_section}>
      <div>
        <Image
          width={100}
          height={100}
          src={apple_tv_app_icon}
          alt='apple_tv_app_icon.png'
        />
        <h1>
          Watch Apple TV+ anywhere
          <br /> on the Apple TV app.
        </h1>
        <p>
          Find the Apple TV app on your favorite Apple devices.
          <br /> Or watch Apple TV+ online at{" "}
          <a href='https://tv.apple.com/'>tv.apple.com</a>.
        </p>
        <div className={styles.grid_container}>
          {item.map((i) => {
            return (
              <div className={styles.grid_item} key={i.id}>
                <Image width={100} height={100} src={i.icon} alt={i.title} />
                <h4>{i.title}</h4>
              </div>
            );
          })}
        </div>
        <h2>
          See it on your smart TV
          <br /> or streaming device.
        </h2>
        <a href='https://tv.apple.com/'>Set up your device</a>
        <div className={styles.grid_container}>
          {brandImg.map((i) => {
            return (
              <div className={styles.grid_item} key={i.id}>
                <Image width={100} height={100} src={i.icon} alt={"Hello"} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
