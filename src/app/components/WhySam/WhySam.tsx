import React from "react";
import CollapsibleCardDeck from "../CollapsibleCardDeck";
import SlideIntoView from "../SlideIntoView";
import styles from "./WhySam.module.css";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

function WhySam() {
  const traits = [
    {
      title: "curious",
      content: (
        <>
          <p>
            The best professional compliment I ever received from a sales pro
            with decades of experience:
          </p>
          <p>
            “Sam, it's clear that you're a student of the craft of sales — it'll
            take you far.”
          </p>
          <p>
            If there's a better way to do something, I pride myself on finding
            it.
          </p>
        </>
      ),
      id: "curious",
    },
    {
      title: "coachable",
      content: (
        <>
          <p>
            Have you ever listened to your recorded voice and wanted to die
            inside?
          </p>
          <p>
            I did that, every week, as me and my manager reviewed my calls to
            find actionable feedback to improve my output.
          </p>
          <p>
            I can't wait to see how much I learn from coding reviews with
            seasoned pros.
          </p>
        </>
      ),
      id: "coachable",
    },
    {
      title: "meticulous",
      content: (
        <>
          <p>
            Details matter. They're crucial to earning the trust of your
            prospect or customer.
          </p>
          <p>I work hard to do that by leaving no stone unturned.</p>
          <p>
            Whether my customer is technically minded or not, I strive to prove
            to them that I deserve their trust.
          </p>
        </>
      ),
      id: "meticulous",
    },
    {
      title: "empathetic",
      content: (
        <>
          <p>
            Any large scale project requires working with multiple stakeholders
            across different teams with different priorities.
          </p>
          <p>
            I'm experienced in communicating with others to ensure that everyone
            feels heard and achieve their objectives.
          </p>
        </>
      ),
      id: "empathetic",
    },
    {
      title: "forward thinking",
      content: (
        <>
          <p>
            I hate that feeling of knowing you've taken a shortcut that might
            cause issues further down the line.
          </p>
          <p>
            If there's a way to build something so that it's easily repeatable,
            scalable and modular, I'll do it.
          </p>
          <p>
            Yes, it might take a little longer now. But you're saving you and
            your teammates much more time in the future. Totally worth it.
          </p>
        </>
      ),
      id: "forward",
    },
    {
      title: "autonomous",
      content: (
        <>
          <p>At start-ups, there's rarely a playbook to follow.</p>
          <p>I love it.</p>
          <p>
            There's nothing more rewarding than independently finding, testing
            and implementing a solution to a problem.
          </p>
        </>
      ),
      id: "autonomous",
    },
  ];

  const { variants } = React.useContext(AnimationContext);

  return (
    <SlideIntoView id="why">
      <motion.div
        className={`wrapper ${styles.wrapper}`}
        aria-label="Why hire sam?"
        variants={variants.fade}
        initial="start"
        animate="end"
      >
        <h2>sam is...</h2>
        <CollapsibleCardDeck
          data={traits}
          cardsOpen={3}
        />
      </motion.div>
    </SlideIntoView>
  );
}

export default WhySam;
