"use client";
import React from "react";
import styles from "./CollapsibleCardDeck.module.css";
import { Disclosure as Card } from "@headlessui/react";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

export interface CollapsibleCardDeckDataItem {
  title: string;
  content: React.ReactNode;
  id: string;
}

interface CollapsibleCardDeck {
  cardsOpen?: Number;
  data: CollapsibleCardDeckDataItem[];
  doubleColumn?: Boolean;
}

function CollapsibleCardDeck({
  data,
  doubleColumn = false,
  cardsOpen,
}: CollapsibleCardDeck) {
  const { variants } = React.useContext(AnimationContext);

  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setExpanded(window.innerWidth > 785);
  }, []);

  const variantsTitle = variants.cards.title;

  const variantsIcon = variants.cards.icon;

  const variantsPanel = variants.cards.panel;

  const variantsPanelText = variants.cards.text;

  function handleOpenCards(index: Number) {
    if (!cardsOpen) return;
    if (expanded) return index < cardsOpen ? true : false;
    if (!expanded) {
      if (cardsOpen) return index < cardsOpen ? true : false;
      return false;
    }
  }

  return (
    <ul className={`${styles.deck} ${doubleColumn && styles.deckDouble}`}>
      {data.map((item, index) => {
        return (
          <Card
            as="li"
            key={crypto.randomUUID()}
            className={styles.card}
            defaultOpen={handleOpenCards(index)}
          >
            {({ open }) => {
              return (
                <>
                  <motion.div
                    variants={variantsTitle}
                    whileTap="tap"
                    whileFocus="hover"
                    whileHover="hover"
                    animate="start"
                    className={`${styles.cardTitleBG} ${styles[item.id]}`}
                    tabIndex={-1}
                  >
                    <Card.Button className={styles.cardTitle}>
                      {item.title}

                      <motion.div
                        variants={variantsIcon}
                        initial="start"
                        animate="start"
                        whileHover="hover"
                        whileFocus="hover"
                        whileTap="tap"
                        tabIndex={-1}
                      >
                        <ExpandIcon open={open} />
                      </motion.div>
                    </Card.Button>
                  </motion.div>
                  <Card.Panel>
                    <motion.div
                      variants={variantsPanel}
                      initial="start"
                      animate="end"
                    >
                      <motion.div
                        variants={variantsPanelText}
                        className={styles.cardBody}
                        initial="start"
                        animate="end"
                      >
                        {item.content}
                      </motion.div>
                    </motion.div>
                  </Card.Panel>
                </>
              );
            }}
          </Card>
        );
      })}
    </ul>
  );
}

function ExpandIcon({ open }: { open: Boolean }) {
  const { shouldReduceMotion } = React.useContext(AnimationContext);
  function iconAnimation() {
    if (open) {
      return shouldReduceMotion ? { opacity: 0 } : { d: "M 50 50 L 50 50" };
    }

    return { d: "M 50 30 L 50 70", opacity: 1 };
  }

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={styles.icon}
    >
      <motion.ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="40"
        className={styles.iconCircle}
      ></motion.ellipse>
      <motion.path
        className={styles.iconLine}
        d="M 70 50 L 30 50"
      ></motion.path>
      <motion.path
        className={styles.iconLine}
        animate={iconAnimation()}
        d="M 50 30 L 50 70"
      ></motion.path>
    </motion.svg>
  );
}

export default CollapsibleCardDeck;
