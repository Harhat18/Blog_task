import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <span>BLOG</span>
      </Link>
      <nav>
        <Link href="/" target="_blank"></Link>
      </nav>
    </header>
  );
}

export default Header;
