import React from "react";
import ProjectCards from "../ProjectCards";
import styles from "./Projects.module.css";
import SlideIntoView from "../SlideIntoView";

function Projects() {
  const projectData = [
    {
      title: "Dictionary",
      content: `<p>A small dictionary app I built whilst teaching myself to code.</p>
        <p>The focus was on sweating the details from a UI perspective, building something fun and delightful for the user.</p>
      `,
      id: "dictionary",
      heroImg: "dictionary",
      href: "/dictionary",
      disabled: false,
    },
    {
      title: "Sales Experience",
      content: `<p>In a career spanning 4 years, I've:</p>
        <ul>
          <li>Regularly overachieved quota.</li>
          <li>Built technical demos for Fortune 100 companies.</li>
          <li>Implemented software and built processes from scratch.</li>
        </ul>
        <p>Here are the details.</p>
        `,
      id: "project-b",
      heroImg: "companyLogos",
      href: "/experience",
      important: true,
      disabled: false,
    },
    {
      title: "Immortal Tracker",
      content: `<p>My favourite video game has 95 unique campaigns to complete.</p><p>But there's no way to track your progress and — whilst a spreadsheet does the job — I felt the community deserved better.</p>`,
      id: "immortal-tracker",
      heroImg: "immortalTracker",
      href: "/immortal-tracker",
      disabled: false,
    },
  ];

  return (
    <SlideIntoView id="projects">
      <h2 className={`wrapper ${styles.heading}`}>experience & projects</h2>
      <div
        className={styles.projectsWrapper}
        aria-label="Sam's projects"
      >
        <div className={`wrapper`}>
          <article>
            <ProjectCards projects={projectData} />
          </article>
        </div>
      </div>
    </SlideIntoView>
  );
}

export default Projects;
