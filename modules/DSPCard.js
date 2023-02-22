import React from "react";
import styles from "@/styles/DSPCard.module.css";
import imageByIndex from "@/data/dsps/images";

const DSPCard = ({ dsp, index }) => {
  return (
    <a href={dsp.href} className={styles.link}>
      <div className={styles.card}>
        <img
          src={imageByIndex(index)}
          alt={dsp.name + " logo"}
          className={styles.dspLogo}
        />
        <button className={styles.button}>Play</button>
      </div>
    </a>
  );
};

export default DSPCard;
