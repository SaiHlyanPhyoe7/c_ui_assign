import React from "react";
import styles from "./_mainNavbar.module.scss";
import { mainNavbarConstant } from "@/constants/mainNavbar/mainNavbar";
import { IconBrandApple, IconBriefcase, IconSearch } from "@tabler/icons-react";

const MainNavbar = () => {
  return (
    <div className={styles.body_main_nav}>
      <div>
        <IconBrandApple />
        {mainNavbarConstant.map((c, index) => {
          return (
            <div className={styles.poi} key={index}>
              {c}
            </div>
          );
        })}
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <IconSearch size='18px' />
          <IconBriefcase size='18px' />
        </section>
      </div>
    </div>
  );
};

export default MainNavbar;
