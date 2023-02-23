import React from "react";
import styles from "@/styles/Preview.module.css";
import Link from "next/link";

const Preview = () => {
  return (
    <div className={styles.page}>
      <span>
        Your link is ready,{" "}
        <Link href="/cant-let-you-down" target="_blank">
          click here
        </Link>
      </span>
      <span>
        Or, <Link href="/portal">go back to portal</Link>
      </span>
    </div>
  );
};

export default Preview;
