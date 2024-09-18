import React from "react";
import styles from "./HamburgerMenu.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import MobileNavigationModal from "../MobileNavigationModal/MobileNavigationModal";
import HamburgerIcon from "../HamburgerIcon";

export interface NavLinkType {
  text: string;
  id: string;
}

interface HamburgerMenu {
  menuIsOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
  navLinks: NavLinkType[];
}

function HamburgerMenu({ menuIsOpen, setMenuIsOpen, navLinks }: HamburgerMenu) {
  function toggleMenu() {
    const nextMenuIsOpen = !menuIsOpen;
    setMenuIsOpen(nextMenuIsOpen);
  }

  return (
    <>
      <Dialog.Root
        key="navigationMenuMobile"
        open={menuIsOpen}
        onOpenChange={setMenuIsOpen}
      >
        <HamburgerIcon
          menuIsOpen={menuIsOpen}
          toggleHandler={toggleMenu}
        />
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Close
            onClick={toggleMenu}
            className={styles.closeNav}
          >
            <span className="sr-only">Close Menu</span>
          </Dialog.Close>
          <MobileNavigationModal
            toggleHandler={toggleMenu}
            navLinks={navLinks}
          />
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default HamburgerMenu;
