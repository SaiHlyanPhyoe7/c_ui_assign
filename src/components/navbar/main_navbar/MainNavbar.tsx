import React from "react";
import styles from "./_mainNavbar.module.scss";
import { mainNavbarConstant } from "@/constants/mainNavbar/mainNavbar";

const MainNavbar = () => {
  return (
    <div className={styles.body_main_nav}>
      <div>
        {mainNavbarConstant.map((c) => {
          const key = typeof c === "string" ? c : c.key;
          const element = typeof c === "string" ? c : c.element;
          return (
            <div className={styles.poi} key={key}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainNavbar;
