"use client";

import React from "react";
import CollapsibleCardDeck from "../CollapsibleCardDeck";
import SlideIntoView from "../SlideIntoView";
import styles from "./WhySam.module.css";
import { m } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import { SKILL_BOX_LIST_QUERYResult } from "@/sanity/types";

function WhySam({ skillBoxes }: { skillBoxes: SKILL_BOX_LIST_QUERYResult }) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <SlideIntoView id="why">
      <m.div
        className={`wrapper ${styles.wrapper}`}
        aria-label="What makes Sam a great SE?"
        variants={variants.fade}
        initial="start"
        animate="end"
      >
        <h2>what makes sam a great SE?</h2>
        <CollapsibleCardDeck
          data={skillBoxes}
          cardsOpen={6}
        />
      </m.div>
    </SlideIntoView>
  );
}

export default WhySam;
