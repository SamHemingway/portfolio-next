import React from "react";
import styles from "./Pills.module.css";

interface Pills {
  content: string[];
  style: React.CSSProperties;
}

function Pills({ content, style }: Pills) {
  return (
    <ul
      className={styles.wrapper}
      style={style}
    >
      {content.map((item, index) => {
        return (
          <li
            key={index}
            className={styles.pill}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default Pills;
