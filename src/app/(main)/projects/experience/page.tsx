import React from "react";
import Hero from "@/components/Hero";
import styles from "../projects.module.css";
import Pills from "@/components/Pills";
import Resume from "@/components/Resume/";
import { sanityFetch } from "@/sanity/lib/live";
import { SOFT_SKILLS_QUERY, HARD_SKILLS_QUERY } from "@/sanity/lib/queries";

export default async function SalesExperience() {
  const hardSkills = await sanityFetch({ query: HARD_SKILLS_QUERY });
  const softSkills = await sanityFetch({ query: SOFT_SKILLS_QUERY });
  return (
    <Hero title="sales experience">
      <div className={styles.innerWrapper}>
        <div className={styles.pillsSection}>
          <div className={styles.pillWrapper}>
            <h2 className={styles.pillHeader}>Soft Skills</h2>
            <Pills content={softSkills?.data} />
          </div>
          <div className={styles.pillWrapper}>
            <h2 className={styles.pillHeader}>Hard Skills</h2>
            <Pills content={hardSkills?.data} />
          </div>
        </div>
        <Resume data={experience} />
      </div>
    </Hero>
  );
}

const experience = [
  {
    company: "Skillstore",
    position: "Consultant & Frontend Engineer",
    duration: "Sep 2023 — current",
    location: "Remote",
    details: [
      "Brought in to help develop the front-end in NextJS/TypeScript, achieving a goal of shipping MVP within 8 weeks.",
      "Analyzed app performance, identifying and eliminating unnecessary work to reduce Total Blocking Time by ~20%.",
      "Developed a custom waitlist solution using the HubSpot API and Zapier, saving 2 hours a week and $828 p.a.",
      "Collaborated with backend lead to consume in-house REST APIs, providing feedback to improve DX.",
      "Launched a HubSpot instance to track investor conversations, slashing founder time spent on admin by 50% and tripling outbound activity levels.",
    ],
  },
  {
    company: "Piper",
    position: "Solutions Consultant & Frontend Engineer",
    duration: "June 2023 — April 2024",
    location: "Remote",
    details: [
      "Increased WAUs by 6x through demoing, onboarding, and owning the post-sales support motion for early users.",
      "Held over 50 discovery calls with early adopters, sharing feedback with founder to help determine PMF.",
      "Diagnosed over a dozen bugs on live troubleshooting calls with early adopters, and shipped code to fix them.",
      "Self-taught new programming language (TypeScript) and implemented new features on the production app.",
      "Facilitated direct feedback sessions between early adopters & Product Lead to steer UX/UI decisions.",
      "Reduced product drop-oﬀ in the first week by 67% by engaging early adopters through their preferred channels.",
    ],
  },
  {
    company: "Hopin",
    position: "Account Executive",
    duration: "Sep 2020 — Feb 2022",
    location: "Remote",
    details: [
      "Regularly exceeded quota, with an average attainment rate of 124%",
      "Helped win over $1m in revenue by building custom demos with HTML/CSS/JS for enterprise deals",
      "Developed an internal API cheat-sheet and custom demo skeleton project, and helped onboard the SE team.",
      "Saved critical customer events with 7 figure budgets from breaking, by working with the engineering team to better communicate breaking changes to our API to our CSMs.",
      "Part of a committee that ran live group demos to 100+ prospects 3x a week, enabling self-service plans to account for just under 50% of company revenue",
      "Refined a consultative approach to discovery calls and demos, resulting in disco → next steps conversion rate of 70%+ and an overall closed-won rate of ~40%.",
    ],
  },
  {
    company: "Poka",
    position: "SDR",
    duration: "Dec 2018 — Feb 2020",
    location: "Montreal",
    details: [
      "Generated new leads via cold outbound prospecting and acted as first point of contact for inbound enquiries.",
      "Ran 100+ discovery and demo calls with prospects, using learning to develop a values based approach to demos.",
      "Developed a playbook for diﬀerent verticals and personas in the manufacturing sector.",
      "Collaborated with 2 AEs to build and implement a strategy to grow existing accounts at global CPG companies like Mars and Nestle, resulting in closing multiple additional sites.",
      "Built outbound sequences, call guidance, email templates and discovery guidance materials that were adopted org-wide and used to onboard new members of the sales team.",
    ],
  },
  {
    company: "Nationwide",
    position: "Mortgage Consultant",
    duration: "May 2014 — June 2017",
    location: "Wakefield, UK",
    details: [
      "Offered certified financial advice on mortgage and home insurance needs for the UK’s biggest building society.",
      "Enhanced and adapted my strong customer service skills to a new sales driven environment with high pressure to meet monthly sales goals.",
      " Carried out comprehensive fact-finds with potential customers, establishing their needs and using my expert knowledge of the mortgage market to find them a suitable product.",
    ],
  },
];
