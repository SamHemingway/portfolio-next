import React from "react";
import Logo from "../Logo";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <Logo />
      <div className={styles.links}>
        <a href="https://github.com/SamHemingway/Portfolio">Source</a>
        <a href="https://www.figma.com/file/TLuPHkEhjeU62taZxRPZPi/Portfolio-site-ideas?node-id=0%3A1&t=f1nJUitEktaPKLMf-1">
          Figma
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
