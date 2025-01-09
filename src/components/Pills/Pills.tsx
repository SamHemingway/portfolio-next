import React from "react";
import styles from "./Pills.module.css";
import type { SKILL_PILL_LIST_QUERYResult } from "@/sanity/types";
interface Pills {
  content: SKILL_PILL_LIST_QUERYResult;
  style?: React.CSSProperties;
}

function Pills({ content, style }: Pills) {
  return (
    <ul
      className={styles.wrapper}
      style={style}
    >
      {content?.skillPills?.map((item, index) => (
        <li
          key={index}
          className={styles.pill}
        >
          {item.skill}
        </li>
      ))}
    </ul>
  );
}

export default Pills;
