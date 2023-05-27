"use client";

import React, { useState } from "react";
import styles from "./_qna.module.scss";

const items = [
  {
    id: 1,
    title: "What is Apple TV+?",
    desc: "Apple TV+ is a streaming service featuring Apple Originals — award-winning series, compelling dramas, groundbreaking documentaries, kids’ entertainment, comedies, and more — with new Apple Originals added every month.",
  },
  {
    id: 2,
    title: "How can I watch it?",
    desc: "Watch Apple TV+ on the Apple TV app, which is already on your favorite Apple devices. Just open the app, click or tap Apple TV+, and enjoy the shows and movies. You can also watch Apple TV+ on streaming platforms, popular smart TVs, and AirPlay-enabled TVs with the Apple TV app — or watch online at ",
  },
  {
    id: 3,
    title: "What does it cost?",
    desc: "That all depends on which offer you choose. (1) If you buy an Apple device, Apple TV+ is included free for 3 months.1 (2) A monthly subscription is just $6.99 per month after a free seven-day trial.2 (3) Apple TV+ is included in Apple One, which bundles up to five other Apple services into a single monthly subscription. Apple One plans start at $16.95 per month. (4) The Apple Music Student Plan comes with a free subscription to Apple TV+.4",
  },
  {
    id: 4,
    title: "Can I share with my family",
    desc: "Of course. Apple TV+ lets you share your subscription with up to five family members.",
  },
  {
    id: 5,
    title: "Are there commercials? And can I watch on demand",
    desc: "Apple Originals are always commercial-free. Some shows release all episodes at once. Other shows add new episodes every Friday. You can then watch them on demand anytime, anywhere.",
  },
  {
    id: 6,
    title: "Do I need an Apple TV 4K?",
    desc: "No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos sound — is the ultimate way to experience Apple TV+, the original shows and movies on Apple TV+ are always available on the Apple TV app on your favorite devices.See all supported devices",
  },
  {
    id: 7,
    title: "Can I download to watch offline?",
    desc: "Absolutely. Download your favorite Apple Originals to your Apple device and watch them anywhere, anytime without a Wi-Fi connection.",
  },
];

const QnaSection = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleAccordionToggle = (index: number) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className={styles.body_qna_section}>
      <div>
        <h1>Questions? Answers.</h1>
        <div className={styles.accordion}>
          {items.map((item, index) => (
            <div key={item.id}>
              <details>
                <summary>{item.title}</summary>
                <p>{item.desc}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QnaSection;
