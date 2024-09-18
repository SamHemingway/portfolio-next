import React from "react";
import Hero from "@/components/Hero";
import WhySam from "@/components/WhySam";
import Projects from "@/components/Projects";
import FAQs from "@/components/FAQs";
import styles from "./page.module.css";
import Pills from "@/components/Pills";

function Home() {
  const skills = [
    "SaaS Sales",
    "Relationship Building",
    "Project Management",
    "Technical Demos",
    "JavaScript",
    "React",
  ];

  return (
    <>
      <Hero
        image
        title="hire a sales pro with top technical skills"
      >
        <h2 className={styles.leadHeader}>
          <span role="text">It's great to meet you. I'm Sam!</span>
        </h2>
        <p
          role="text"
          className={styles.leadBody}
        >
          An experienced startup salesperson with a knack for quickly learning
          technical skills.
        </p>
        <p
          role="text"
          className={styles.leadBody}
        >
          For example, I taught myself web development. It seemed like fun. It
          was.
        </p>
        <p
          role="text"
          className={styles.leadBody}
        >
          I'm looking for a role where I can combine my 2 loves: building deep
          relationships with people, whilst satisfying my inner nerd.
        </p>
        <Pills content={skills} />
      </Hero>
      <WhySam />
      <Projects />
      <FAQs />
    </>
  );
}

export default Home;
