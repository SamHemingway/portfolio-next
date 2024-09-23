"use client";
import React from "react";
import styles from "./CollapsibleCardDeck.module.css";
import {
  Disclosure as Card,
  DisclosureButton as CardButton,
  DisclosurePanel as CardPanel,
} from "@headlessui/react";
import { m } from "framer-motion";
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
                  <m.div
                    variants={variantsTitle}
                    whileTap="tap"
                    whileFocus="hover"
                    whileHover="hover"
                    animate="start"
                    className={`${styles.cardTitleBG} ${styles[item.id]}`}
                    tabIndex={-1}
                  >
                    <CardButton className={styles.cardTitle}>
                      {item.title}

                      <m.div
                        variants={variantsIcon}
                        initial="start"
                        animate="start"
                        whileHover="hover"
                        whileFocus="hover"
                        whileTap="tap"
                        tabIndex={-1}
                      >
                        <ExpandIcon open={open} />
                      </m.div>
                    </CardButton>
                  </m.div>
                  <CardPanel>
                    <m.div
                      variants={variantsPanel}
                      initial="start"
                      animate="end"
                    >
                      <m.div
                        variants={variantsPanelText}
                        className={styles.cardBody}
                        initial="start"
                        animate="end"
                      >
                        {item.content}
                      </m.div>
                    </m.div>
                  </CardPanel>
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
    <m.svg
      viewBox="0 0 100 100"
      className={styles.icon}
    >
      <m.ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="40"
        className={styles.iconCircle}
      ></m.ellipse>
      <m.path
        className={styles.iconLine}
        d="M 70 50 L 30 50"
      ></m.path>
      <m.path
        className={styles.iconLine}
        animate={iconAnimation()}
        d="M 50 30 L 50 70"
      ></m.path>
    </m.svg>
  );
}

export default CollapsibleCardDeck;
