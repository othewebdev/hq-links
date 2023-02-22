import React from "react";
import styles from "@/styles/Preview.module.css";

const Unauthorized = () => {
  return (
    <div className={styles.page}>
      <span>
        You are not currently authorized to use HQ Links. Please contact us @
        contact@hq-records.com
      </span>
    </div>
  );
};

export default Unauthorized;
