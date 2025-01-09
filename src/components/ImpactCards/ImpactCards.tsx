import React from "react";
import styles from "./ImpactCards.module.css";
import type { ImpactCard } from "@/sanity/types";

interface ImpactCards {
  content: ImpactCard[];
  style?: React.CSSProperties;
}

function ImpactCards({ content, style }: ImpactCards) {
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
            <h2 className={styles.title}>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ImpactCards;
