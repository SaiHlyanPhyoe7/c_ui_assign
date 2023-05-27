import React from "react";
import styles from "./_footer.module.scss";
import {
  IconBrandApple,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const a = [
  {
    id: 1,
    desc: "$6.99/month after free trial. Only one offer per Apple ID and only one offer per family if you’re part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your Family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.",
  },
  {
    id: 2,
    desc: "One subscription per Family Sharing group. Plan automatically renews until cancelled.",
  },
  {
    id: 3,
    desc: "The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.",
  },
  {
    id: 4,
    desc: "Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify or do not renew your Apple Music Student subscription. Offer good for verified college students only and does not extend to a Family Sharing group.",
  },
];

const r = [
  {
    q: "Shop and Learn",
    z: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    q: "Apple Wallet",
    z: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
  },
  {
    q: "Account",
    z: ["Manage Your Apple Id", "Apple Store Account", "iCloud.com"],
  },
  {
    q: "Entertainment",
    z: [
      "Apple One",
      "Apple TV+",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness++",
      "Apple News",
      "Apple Podcats",
      "Apple Books",
      "App Store",
    ],
  },
  {
    q: "Apple Store",
    z: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Certified Refurbished",
      "Apple Trade in",
      "Financing",
      "Carrier Deals at Apple",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    q: "For Business",
    z: ["Apple and Business", "Shop for Business"],
  },
  {
    q: "For Education",
    z: ["Apple and Education", "Shop for K-12", "Shop for College"],
  },
  {
    q: "For Healthcare",
    z: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Records on iPhone",
    ],
  },
  {
    q: "For Government",
    z: [
      "Shop for Government",
      "Shop for Veterans and Military",
      "Shop for Goverment",
    ],
  },
  {
    q: "Apple Values",
    z: [
      "Accessibility",
      "Education",
      "Environment",
      "Inclusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
  },
  {
    q: "About Apple",
    z: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];

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
