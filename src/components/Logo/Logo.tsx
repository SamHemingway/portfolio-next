import React from "react";
import styles from "./Logo.module.css";
import Link from "next/link";

interface Logo {
  menuIsOpen?: boolean;
}

function Logo({ menuIsOpen }: Logo) {
  return (
    <Link
      href="/#"
      aria-label="Home"
      className={styles.logo}
      // fix for a really weird bug where logo shifted when menu was opened up
      style={menuIsOpen ? { position: "relative", right: "0.75px" } : undefined}
    >
      sam<strong>hemingway</strong>
    </Link>
  );
}

export default Logo;
