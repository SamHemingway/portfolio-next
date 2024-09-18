import React from "react";
import styles from "./Heading.module.css";

interface HeaderProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

function Header({ level, children, ...delegated }: HeaderProps) {
  const TagPrimitive = `h${level || 1}`;

  let computedStyles = `${styles.headerBase}`;
  if (level === 1) computedStyles += ` ${styles.mainHeader}`;

  return (
    // @ts-ignore
    <TagPrimitive
      className={computedStyles}
      {...delegated}
    >
      {children}
    </TagPrimitive>
  );
}

Header.displayName = "Header";

export default Header;
