import React from "react";
import Logo from "../Logo";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import IconList from "../IconList";
import styles from "./Header.module.css";
import Button from "../Button";
import NavLinks from "../NavLinks";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import { PopupButton } from "react-calendly";

interface Header {
  menuIsOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
}

function Header({ menuIsOpen, setMenuIsOpen }: Header) {
  const { variants } = React.useContext(AnimationContext);
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
      <nav>
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
          <PopupButton
            url="https://calendly.com/hemingway/hiresam"
            rootElement={document.getElementById("root")}
            text="Let's talk"
            styles={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          />
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
