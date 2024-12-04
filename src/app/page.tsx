import React from "react";
import Hero from "@/components/Hero";
import WhySam from "@/components/WhySam";
import Projects from "@/components/Projects";
import FAQs from "@/components/FAQs";
import styles from "./page.module.css";
import ImpactCards from "@/components/ImpactCards";
import type { ImpactCard } from "@/components/ImpactCards";
import Pills from "@/components/Pills";
import TestimonialSection from "@/components/TestimonialSection";

function Home() {
  return (
    <>
      <Hero
        image
        title="sam is a solutions expert with 5 years of saas experience"
      >
        <ImpactCards content={keyMetrics} />
        <Pills
          content={skills}
          style={{ marginBlockStart: "4rem" }}
        />
      </Hero>
      <WhySam />
      <Projects />
      <TestimonialSection />
    </>
  );
}

const keyMetrics: ImpactCard[] = [
  { title: "$1M+", content: "Revenue generated from custom demos" },
  { title: "38.7%", content: "Increase in ACV on deals closed as an SE" },
  { title: "123%", content: "Average career quota attainment" },
];

const skills = [
  "Rest APIs",
  "Custom Demos",
  "JavaScript",
  "React",
  "CSS",
  "HTML",
];

export default Home;
