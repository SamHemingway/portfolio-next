import React from "react";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Headshot from "../Headshot";
import Heading from "../Primitives/Heading";
import { AnimationContext } from "../../contexts/AnimationProvider";

interface Hero {
  image: boolean;
  title: string;
  children: React.ReactNode;
}

function Hero({ image, title, children }: Hero) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <>
      <div
        className={`wrapper ${styles.heroWrapper} ${
          !image && styles.heroWrapperNoImage
        }`}
      >
        {image && (
          <Headshot
            subject="sam"
            altText="A stylised cariacuture of Sam smiling warmly."
          />
        )}
        <Heading level={1}>{title}</Heading>
      </div>
      <motion.section
        className={`${styles.leadWrapper} ${
          !image && styles.leadWrapperNoImage
        }`}
        variants={variants.fade}
        initial={"start"}
        animate={"end"}
      >
        <div className="wrapper">{children}</div>
      </motion.section>
    </>
  );
}

export default Hero;
