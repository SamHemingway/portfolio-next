import React from "react";
import Hero from "@/components/Hero";
import WhySam from "@/components/WhySam";
import Projects from "@/components/Projects";
import ImpactCards from "@/components/ImpactCards";
import Pills from "@/components/Pills";
import TestimonialSection from "@/components/TestimonialSection";
import { sanityFetch } from "@/sanity/lib/live";
import {
  HEADER_QUERY,
  IMPACT_CARD_QUERY,
  HARD_SKILLS_QUERY,
  SKILL_BOX_LIST_QUERY,
  EXPERIENCE_BLOCK_QUERY,
} from "@/sanity/lib/queries";

async function Home() {
  const header = await sanityFetch({ query: HEADER_QUERY });
  const impactCards = await sanityFetch({ query: IMPACT_CARD_QUERY });
  const skillPills = await sanityFetch({
    query: HARD_SKILLS_QUERY,
  });
  const skillBoxes = await sanityFetch({
    query: SKILL_BOX_LIST_QUERY,
  });
  const experienceBlocks = await sanityFetch({
    query: EXPERIENCE_BLOCK_QUERY,
  });

  return (
    <>
      <Hero
        image
        title={
          header?.data?.title ??
          "sam is a solutions expert with 5 years of saas experience"
        }
      >
        <ImpactCards content={impactCards?.data} />
        <Pills
          content={skillPills?.data}
          style={{ marginBlockStart: "4rem" }}
        />
      </Hero>
      <WhySam skillBoxes={skillBoxes?.data} />
      <Projects experienceBlocks={experienceBlocks?.data} />
      <TestimonialSection />
    </>
  );
}

export default Home;
