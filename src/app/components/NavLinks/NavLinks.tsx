import React from "react";
import styles from "./NavLinks.module.css";
import { NavLinkType } from "../HamburgerMenu";
function NavLinks({ data }: { data: NavLinkType[] }) {
  return (
    <ul className={styles.navBar}>
      {data.map((item) => {
        return (
          <li
            role="menuitem"
            className={styles.navItem}
            key={item.id}
          >
            <a
              href={item.id}
              className={styles.navLink}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
