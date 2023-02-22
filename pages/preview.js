import React from "react";
import styles from "@/styles/Preview.module.css";

const Preview = () => {
  return (
    <div className={styles.page}>
      <span>
        Your link is ready,{" "}
        <a href="/cant-let-you-down" target="_blank">
          click here
        </a>
      </span>
      <span>
        Or, <a href="/portal">go back to portal</a>
      </span>
    </div>
  );
};

export default Preview;
