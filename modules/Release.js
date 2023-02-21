import React from "react";
import Header from "./Header";
import styles from "@/styles/Release.module.css";
import CoverImage from "./CoverImage";
import DSPCard from "./DSPCard";

const Release = ({ artist }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${artist.release.coverHref})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={styles.releasePage}
    >
      <div className={styles.releaseContainer}>
        <CoverImage artist={artist} />
        <div className={styles.releaseContent}>
          <Header artist={artist} />
          {artist.dsps.map((dsp) => (
            <DSPCard dsp={dsp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Release;
