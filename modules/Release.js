import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "@/styles/Release.module.css";
import CoverImage from "./CoverImage";
import DSPCard from "./DSPCard";
import { cookie_disclaimer } from "@/data/disclaimers/cookies";

const Release = ({ artist }) => {
  const [isOnPreOrder, setIsOnPreOrder] = useState(false);
  useEffect(() => {
    const currentDate = new Date();
    const checkIfReleased = () => {
      if (artist.release.release_date <= currentDate) {
        setIsOnPreOrder(false);
      } else {
        setIsOnPreOrder(true);
      }
    };
    checkIfReleased();
  }, []);

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
          {artist.dsps.map((dsp, i) => (
            <DSPCard dsp={dsp} index={i} onPreorder={isOnPreOrder} />
          ))}
        </div>
      </div>
      <a href="/cookies-policy" className={styles.disclaimer}>
        {cookie_disclaimer}
      </a>
    </div>
  );
};

export default Release;
