import React from "react";
import styles from "./newsletter.module.css"; // Use CSS module import

const newsletters = [
  {
    id: 1,
    title: "The Goenkan Colloquium",
    date: "date",
    description: "description",
    link: "https://drive.google.com/file/d/1O8iYl6XvuNgu5UAHijMxNYGtT3ggz24w/view?usp=sharing",
  },
  {
    id: 2,
    title: "Newsletter Day 1",
    date: "date",
    description: "description",
    link: "https://drive.google.com/file/d/1d_97y84cBT2siJ-Vg3WXT4YKk1IWQRTB/view?usp=sharing",
  },
  {
    id: 3,
    title: "Newsletter Day 2",
    date: "date",
    description: "description",
    link: "https://drive.google.com/file/d/1gCWIQqOrgR_DIoqd-oDpUmnWXj6uCbbw/view?usp=sharing",
  },
];

const Newsletter = () => {
  return (
    <div className={styles["newsletter-container"]}>
      <div className={styles["newsletter-header"]}>
        <h1 className={styles["newsletter-heading"]}>Newsletters</h1>
      </div>
      <div className={styles["newsletter-list"]}>
        {newsletters.map((news) => (
          <div className={styles["newsletter-card"]} key={news.id}>
            <h2>{news.title}</h2>
            {/*<p className={styles["newsletter-date"]}>{news.date}</p>*/}
            <a
              href={news.link}
              className={styles["newsletter-button"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;