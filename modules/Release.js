import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "@/styles/Release.module.css";
import CoverImage from "./CoverImage";
import DSPCard from "./DSPCard";
import { cookie_disclaimer } from "@/data/disclaimers/cookies";
import Link from "next/link";

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
            <DSPCard key={i} dsp={dsp} index={i} onPreorder={isOnPreOrder} />
          ))}
        </div>
      </div>
      <Link href="/cookies-policy" className={styles.disclaimer}>
        {cookie_disclaimer}
      </Link>
    </div>
  );
};

export default Release;
