"use client";
import React from "react";
import styles from "./ProjectCards.module.css";
import { m } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import Link from "next/link";
import { EXPERIENCE_BLOCK_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/utils";
import Image from "next/image";
import { components } from "@/sanity/portableTextComponents";

function ProjectCards({
  projects,
}: {
  projects: EXPERIENCE_BLOCK_QUERYResult;
}) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <ul className={styles.deck}>
      {projects.map((project) => {
        return (
          <m.li
            key={project._id}
            className={`${styles.cardWrapper} ${
              project.main && styles.importantCard
            }`}
            variants={variants.projectCards}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            tabIndex={-1}
          >
            <Link
              href={project.link ?? "#"}
              className={styles.card}
            >
              {project.image ? (
                <Image
                  src={urlFor(project.image)
                    .width(1000)
                    .height(400)
                    .quality(80)
                    .auto("format")
                    .url()}
                  alt="A screenshot of the project."
                  className={styles.cardImage}
                  width={600}
                  height={233}
                />
              ) : null}
              <div className={styles.cardContent}>
                <h3 className={styles.cardHeader}>{project.title}</h3>
                {project.content ? (
                  <PortableText
                    value={project.content}
                    components={components}
                  />
                ) : null}
              </div>
            </Link>
          </m.li>
        );
      })}
    </ul>
  );
}

export default ProjectCards;
