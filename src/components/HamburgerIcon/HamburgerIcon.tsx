"use client";
import React from "react";
import styles from "./HamburgerIcon.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

interface HamburgerIcon {
  menuIsOpen: boolean;
  toggleHandler: () => void;
}

function HamburgerIcon({ menuIsOpen, toggleHandler }: HamburgerIcon) {
  const { variants } = React.useContext(AnimationContext);
  let animation = menuIsOpen ? "open" : "closed";

  return (
    <Dialog.Trigger
      className={styles.icon}
      onClick={toggleHandler}
    >
      <motion.svg
        viewBox="2.5 2.5 95 95"
        className={styles.svg}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <defs>
          <linearGradient
            id="gradient-0"
            x1="50"
            x2="50"
            y1="2.5"
            y2="97.5"
            gradientUnits="userSpaceOnUse"
            spreadMethod="pad"
          >
            <stop
              offset="0"
              stopColor="#FFF"
              stopOpacity="0.2"
            ></stop>
            <stop
              offset="1"
              stopColor="#FFF"
              stopOpacity="0.05"
            ></stop>
          </linearGradient>
        </defs>
        <motion.rect
          width="95"
          height="95"
          x="2.5"
          y="2.5"
          fill="url(#gradient-0)"
          ry="10"
          variants={variants.hamburgerIcon.wrapper}
          animate={animation}
        ></motion.rect>
        <motion.path
          className={styles.line}
          d="M 20 30 L 80 30"
          strokeLinecap="round"
          variants={variants.hamburgerIcon.line1}
          animate={animation}
        ></motion.path>
        <motion.path
          className={styles.line}
          d="M 20 50 L 80 50"
          strokeLinecap="round"
          variants={variants.hamburgerIcon.line2}
          transition={{ duration: 0.1 }}
          animate={animation}
          opacity="1"
        ></motion.path>
        <motion.path
          className={styles.line}
          d="M 20 70 L 80 70"
          strokeLinecap="round"
          variants={variants.hamburgerIcon.line3}
          animate={animation}
        ></motion.path>
      </motion.svg>
      <span className="sr-only">Menu</span>
    </Dialog.Trigger>
  );
}

export default HamburgerIcon;
