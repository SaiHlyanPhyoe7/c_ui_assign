import React from "react";
import styles from "./_footer.module.scss";
import {
  IconBrandApple,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { a, r } from "@/constants/footer/footer";

const Footer = () => {
  return (
    <div className={styles.fotter_section}>
      <div>
        {a.map((x) => {
          return (
            <ol key={x.id}>
              {x.id}
              {"   "}
              {x.desc}
            </ol>
          );
        })}
        <hr />
        <section className={styles.c}>
          <IconBrandApple />
          <IconChevronRight />
          <p>Only on Apple</p>
          <IconChevronRight />
          <p>Apple TV+</p>
        </section>
        <div>
          <div className={styles.grid}>
            {r.map((item, index) => (
              <div key={index} className={styles.gridItem}>
                <h4>{item.q}</h4>
                {item.z.map((t, index) => {
                  return (
                    <div key={index}>
                      <p>{t}</p>
                    </div>
                  );
                })}
                <br />
              </div>
            ))}
          </div>
        </div>
        <p className={styles.fotter_k}>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MY-APPLE.
        </p>
        <br />
        <p>
          Copyright © 2023 Apple Inc. All rights reserved. Privacy Policy Terms
          of Use Sales and Refunds Legal Site Map
        </p>
      </div>
    </div>
  );
};

export default Footer;
