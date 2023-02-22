import React from "react";
import styles from "@/styles/DSPCard.module.css";
import imageByName from "@/data/dsps/images";

const DSPCard = ({ dsp, index, onPreorder }) => {
  return (
    <a href={dsp.href} className={styles.link}>
      <div className={styles.card}>
        <img
          src={imageByName(dsp.name)}
          alt={dsp.name + " logo"}
          className={styles.dspLogo}
        />
        <button className={styles.button}>
          {onPreorder ? "Pre-order" : "Play"}
        </button>
      </div>
    </a>
  );
};

export default DSPCard;
