import React from "react";
import styles from "@/styles/Login.module.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src="https://i.ibb.co/gdkXFGF/logo-hqlinks.webp"
          alt="HQ Links"
        />
      </div>
      <div className={styles.loginForm}>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <Link href="/portal">
          <button className="button">Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
