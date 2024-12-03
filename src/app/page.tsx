import React from "react";
import Hero from "@/components/Hero";
import WhySam from "@/components/WhySam";
import Projects from "@/components/Projects";
import FAQs from "@/components/FAQs";
import styles from "./page.module.css";

function Home() {
  return (
    <>
      <Hero
        image
        title="help undo the biggest mistake of sam's career"
      >
        <h2 className={styles.leadHeader}>
          <span role="text">Hell of a hook, right?</span>
        </h2>
        <p
          role="text"
          className={styles.leadBody}
        >
          At a crucial point in my career, I faced a choice: follow a promotion
          path towards becoming an SE, or move up to AE.
        </p>
        <p
          role="text"
          className={styles.leadBody}
        >
          I chose poorly. All of my biggest achievevments — and when I've had
          the most fun — have arrived whilst moonlighting as an SE.
        </p>
        <p
          role="text"
          className={styles.leadBody}
        >
          I'm now looking to formalise that by landing an SE role.
        </p>
      </Hero>
      <WhySam />
      <Projects />
      <FAQs />
    </>
  );
}

export default Home;
