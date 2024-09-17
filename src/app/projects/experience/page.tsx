import React from "react";
import Hero from "@/components/Hero";
import styles from "../projects.module.css";
import Pills from "@/components/Pills";
import Resume from "@/components/Resume/";

export default function SalesExperience() {
  return (
    <Hero title="sales experience">
      <div className={styles.innerWrapper}>
        <div className={styles.pillsSection}>
          <div className={styles.pillWrapper}>
            <h2 className={styles.pillHeader}>Soft Skills</h2>
            <Pills content={softSkills} />
          </div>
          <div className={styles.pillWrapper}>
            <h2 className={styles.pillHeader}>Sales tech experience</h2>
            <Pills content={hardSkills} />
          </div>
        </div>
        <Resume data={experience} />
      </div>
    </Hero>
  );
}

const hardSkills = [
  "Salesforce",
  "HubSpot",
  "Outreach",
  "Apollo",
  "Jira",
  "Zapier",
  "Gong",
];
const softSkills = [
  "Deep discovery",
  "Technical demos",
  "Relationship building",
  "Custom demo instances",
  "Cross-team collaboration",
  "Onboarding & coaching",
];

const webTech = [
  "Javascript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "CSS",
];

const experience = [
  {
    company: "Piper",
    position: "GTM Consultant & Frontend Engineer",
    duration: "June 2023 — April 2024",
    location: "Remote",
    details: [
      "Drove 5x WAUs as full-cycle salesperson: cold outreach -> demo -> close -> post-sales support.",
      "Built the first customer-facing demo instance.",
      "Collaborated with Product team to collect product usage data alongside direct feedback to inform product direction & priorities.",
      "Implemented Apollo, integrating it into existing CRM (HubSpot) and built full outbound sequences from scratch.",
      "Owned post-sales to keep users sticky.",
      "Self-taught a new programming language (TypeScript) to contribute to the codebase via fixing bugs & implementing new functionality.",
    ],
  },
  {
    company: "Hopin",
    position: "Account Executive",
    duration: "Sep 2020 — Feb 2022",
    location: "Remote",
    details: [
      "Joining as the 4th SDR hire, I helped develop the early-stage pitch and sales process.",
      "Built custom demos using HTML/CSS/JS to help AEs close enterprise deals worth $500,000+.",
      "As an SDR, consistently performed in top 5% of the org in metrics such as opportunities created & revenue generated, resulting in promotion to AE.",
      "Coached new SDRs with my mentees becoming top 10% contributors.",
      "Quarterly quota achievement as an AE: 147%, 91% & 131%.",
    ],
  },
  {
    company: "Poka",
    position: "SDR",
    duration: "Dec 2018 — Feb 2020",
    location: "Montreal",
    details: [
      "Generated new leads via cold outbound prospecting and acted as first point of contact for inbound enquiries.",
      "Completed discovery and demo calls before handing over to an Account Executive (weird process, I know).",
      "As an SDR, consistently performed in top 5% of the org in metrics such as opportunities created & revenue generated, resulting in promotion to AE.",
      "Built, from scratch, a sales playbook for different verticals and personas in the manufacturing sector.",
      "Built outbound sequences, call guidance, email templates and discovery guidance materials that were used to help onboard new SDRs.",
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
