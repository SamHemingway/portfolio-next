"use client";
import React from "react";
import styles from "./MobileNavigationModal.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import SocialIcons from "../SocialIcons";
import Button from "../Button";
import { m } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import { NavLinkType } from "../HamburgerMenu";
import Link from "next/link";

interface MobileNavigationModal {
  toggleHandler: () => void;
  navLinks: NavLinkType[];
}

function MobileNavigationModal({
  toggleHandler,
  navLinks,
}: MobileNavigationModal) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <Dialog.Content
      className={styles.content}
      onInteractOutside={toggleHandler}
      onEscapeKeyDown={toggleHandler}
    >
      <Dialog.Title className="sr-only">Navigation</Dialog.Title>
      <m.ul
        className={`${styles.navList} stack`}
        variants={variants.childrenShortStagger}
        initial="start"
        animate="end"
      >
        {navLinks.map((data, index) => {
          return (
            <Dialog.Close
              asChild
              className={styles.close}
              onClick={toggleHandler}
              key={index}
            >
              <m.li variants={variants.springRight}>
                <Link
                  href={data.id}
                  className={styles.navItem}
                >
                  {data.text}
                </Link>
              </m.li>
            </Dialog.Close>
          );
        })}
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <m.li variants={variants.springRight}>
            <SocialIcons
              forceVisible={true}
              iconSize="large"
            />
          </m.li>
        </Dialog.Close>
        <Dialog.Close
          asChild
          className={styles.close}
          onClick={toggleHandler}
        >
          <m.li variants={variants.springRight}>
            <Button
              variant="cta"
              stretch
            >
              <Link href="#hire">Let's talk</Link>
            </Button>
          </m.li>
        </Dialog.Close>
      </m.ul>
    </Dialog.Content>
  );
}

export default MobileNavigationModal;
