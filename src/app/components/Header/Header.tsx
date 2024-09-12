"use client";
import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

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
          <IconList />
        </div>
        <NavLinks data={navLinks} />
        <Button
          variant="letsTalk"
          tabIndex={-1}
          as="div"
        >
          "hey"
        </Button>
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
