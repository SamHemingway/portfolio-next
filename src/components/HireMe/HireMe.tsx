"use client";
import React from "react";
import styles from "./HireMe.module.css";
import Headshot from "../Headshot";
import SlideIntoView from "../SlideIntoView";
import BookCallButton from "../BookCallButton";

function HireMe() {
  let isMobile;
  React.useEffect(() => {
    isMobile = window.innerWidth <= 500;
  });
  return (
    <SlideIntoView id="hire">
      <div className={`wrapper ${styles.heroWrapper}`}>
        <Headshot
          subject="rupert"
          altText="A stylised cariacuture of Sam's handsome dog, Rupert, waiting patiently for treats."
          animate={false}
        />
        <h2 className={styles.heroHeader}>
          hire me so I can buy more treats for rupert.
        </h2>
      </div>
      <article className={styles.leadWrapper}>
        <div className={`wrapper ${styles.content}`}>
          <p className={styles.content}>
            That's right, I'm not above taking advantage of the fact that my dog
            is <em>outrageously handsome</em> to try and snag a job.
          </p>
          <p>
            I'd be happy to tell you more about him (and, answer any questions
            you might have about me, of course).
          </p>
          <BookCallButton
            stretch={isMobile}
            variant="cta"
          >
            Let's talk
          </BookCallButton>
        </div>
      </article>
    </SlideIntoView>
  );
}

export default HireMe;
