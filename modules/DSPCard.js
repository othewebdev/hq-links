import React from "react";
import styles from "@/styles/DSPCard.module.css";

const DSPCard = ({ dsp }) => {
  return (
    <a href={dsp.href} className={styles.link}>
      <div className={styles.card}>
        <img src={dsp.logoHref} alt={dsp.name + " logo"} />
        <button className={styles.button}>Play</button>
      </div>
    </a>
  );
};

export default DSPCard;
