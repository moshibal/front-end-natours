import React from "react";
import styles from "./Header.module.css";
import logo from "../Images/img/logo-white.png";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["logo-box"]}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles["text-box"]}>
        <h1 className={styles["heading-primary"]}>
          <span className={styles["heading-primary-main"]}>Outdoors</span>
          <span className={styles["heading-primary-sub"]}>
            is where life happens
          </span>
        </h1>

        <a href="/#" className={`${styles.btn} ${styles["btn-white"]}`}>
          Discover our tours
        </a>
      </div>
    </div>
  );
};

export default Header;
