"use client";
import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SocialIcons from "../SocialIcons";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks";
import { motion } from "framer-motion";
import { AnimationContext } from "@/contexts/AnimationProvider";
import BookCallButton from "../BookCallButton";

function Header() {
  const { variants } = React.useContext(AnimationContext);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const navLinks = [
    { text: "why sam", id: "/#why" },
    { text: "experience", id: "/#projects" },
    { text: "FAQs", id: "/#faqs" },
  ];

  return (
    <motion.header
      className={styles.wrapper}
      variants={variants.springDown}
      initial="start"
      animate="finish"
    >
      <nav className={styles.nav}>
        <div className={styles.leftSide}>
          <Logo menuIsOpen={menuIsOpen} />
          <SocialIcons />
        </div>
        <NavLinks data={navLinks} />
        <BookCallButton variant="header">Let's talk</BookCallButton>
        <HamburgerMenu
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
          navLinks={navLinks}
        />
      </nav>
    </motion.header>
  );
}

export default React.memo(Header);
