"use client";
import React from "react";
import CollapsibleCardDeck from "../CollapsibleCardDeck";
import SlideIntoView from "../SlideIntoView";
import styles from "./WhySam.module.css";
import { m } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

function WhySam() {
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
          data={traits}
          cardsOpen={6}
        />
      </m.div>
    </SlideIntoView>
  );
}

export default WhySam;

const traits = [
  {
    title: "Custom Demos",
    content: (
      <>
        <p>
          I've built custom demos that have helped close enterprise
          opportunities worth over $1M in revenue.
        </p>
        <p>
          I had to learn web technologies like CSS and JS overnight, and
          decipher an API with no documentation.
        </p>
        <p>Genuinely the most fun I've had in my career so far.</p>
      </>
    ),
    id: "meticulous",
  },
  {
    title: "Technical knowledge",
    content: (
      <>
        <p>
          I self-taught myself frontend web technologies to upskill myself and
          make sure I could walk the walk.
        </p>
        <p>
          Since then, I've shipped code in production code bases to fix bugs and
          launch new functionality.
        </p>
        <p>
          I've won the trust of senior engineers, to the point where they've
          recommended I look into a career as a developer.
        </p>
      </>
    ),
    id: "coachable",
  },
  {
    title: "Hits quota",
    content: (
      <>
        <p>As an AE, my average quota attainment came in at 123%.</p>
        <p>
          This included winning the top performing AE in the entire Hopin sales
          org in my first quarter as an AE, coming in at 147%.
        </p>
        <p>
          I know how stressful an AEs job is. I can't wait to help them close
          more deals.
        </p>
      </>
    ),
    id: "forward",
  },
  {
    title: "solutions focused",
    content: (
      <>
        <p>
          I've run over 300 disco and demos across 5 years of SaaS sales
          experience.
        </p>
        <p>
          That means I've learned the hard way that the only way to run a good
          demo is to make it laser-focused on the prospects problems, and cut
          out the rest.
        </p>
        <p>Say it with me: no to feature-dumping!</p>
      </>
    ),
    id: "empathetic",
  },
  {
    title: "Project Management",
    content: (
      <>
        <p>
          I've been involved in projects where I've had to manage both internal
          and external stakeholders.
        </p>
        <p>
          Like the time I helped the engineering team communicate API changes
          better to CSMs to prevent breaking changes to 7 figure customer
          events.
        </p>
        <p>
          Or the time I worked with Sales Management across BUs to develop a
          multi-product selling motion that increased ACV from $18k to $25k.
        </p>
      </>
    ),
    id: "curious",
  },
  {
    title: "API experience",
    content: (
      <>
        <p>
          I've built integrations using REST APIs to solve business problems.
        </p>
        <p>
          I've also shipped code to production code bases that consume in-house
          APIs developed by a backend team, presenting data from databases to
          those who need to see it.
        </p>
      </>
    ),
    id: "autonomous",
  },
];
