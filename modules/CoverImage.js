import React from "react";
import styles from "@/styles/CoverImage.module.css";
import ReactPlayer from "react-audio-player";

const CoverImage = ({ artist }) => {
  return (
    <div>
      <img
        className={styles.coverImage}
        src={artist.release.coverHref}
        alt="Release Name + Cover"
      />
    </div>
  );
};

export default CoverImage;
