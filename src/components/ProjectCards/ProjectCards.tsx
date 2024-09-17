import React from "react";
import styles from "./ProjectCards.module.css";
import Parser from "html-react-parser";
import { motion } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import Link from "next/link";

interface ProjectCard {
  title: string;
  content: string;
  id: string;
  heroImg: string;
  href: string;
  disabled: boolean;
  important?: boolean;
}

function ProjectCards({ projects }: { projects: ProjectCard[] }) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <ul className={styles.deck}>
      {projects.map((project) => {
        return (
          <motion.li
            key={project.id}
            className={`${styles.cardWrapper} ${
              project.important && styles.importantCard
            }`}
            variants={variants.projectCards}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            tabIndex={-1}
          >
            <Link
              href={project.href}
              className={`${styles.card} ${
                project.disabled && styles.disabled
              }`}
            >
              <picture className={styles.cardImage}>
                <source
                  srcSet={`assets/images/${project.heroImg}.avif`}
                  type="image/avif"
                />
                <source
                  srcSet={`assets/images/${project.heroImg}.webp`}
                  type="image/webp"
                />
                <img
                  src={`assets/images/${project.heroImg}.png`}
                  alt="A screenshot of the project."
                />
              </picture>
              <div className={styles.cardContent}>
                <h3 className={styles.cardHeader}>{project.title}</h3>
                {Parser(project.content)}
              </div>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default ProjectCards;
