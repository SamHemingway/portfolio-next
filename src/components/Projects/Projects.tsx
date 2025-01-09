import React from "react";
import ProjectCards from "../ProjectCards";
import styles from "./Projects.module.css";
import SlideIntoView from "../SlideIntoView";
import { EXPERIENCE_BLOCK_QUERYResult } from "@/sanity/types";

function Projects({
  experienceBlocks,
}: {
  experienceBlocks: EXPERIENCE_BLOCK_QUERYResult;
}) {
  return (
    <SlideIntoView id="projects">
      <h2 className={`wrapper ${styles.heading}`}>experience & projects</h2>
      <div
        className={styles.projectsWrapper}
        aria-label="Sam's projects"
      >
        <div className={`wrapper`}>
          <article>
            <ProjectCards projects={experienceBlocks} />
          </article>
        </div>
      </div>
    </SlideIntoView>
  );
}

export default Projects;
