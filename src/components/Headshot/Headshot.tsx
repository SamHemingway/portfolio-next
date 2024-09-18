import React from "react";
import styles from "./Headshot.module.css";
import { m, useInView } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

interface Headshot {
  subject: "sam" | "rupert";
  altText: string;
  animate?: boolean;
}

function Headshot({ subject, altText, animate = true }: Headshot) {
  const ref = React.useRef<HTMLPictureElement>(null);

  const isInView = useInView(ref, { once: true });

  const { variants } = React.useContext(AnimationContext);

  return (
    <m.picture
      className={styles.headshot}
      variants={animate && variants.springUp}
      initial="start"
      animate={isInView ? "end" : "start"}
      transition={{ delay: 2 }}
      ref={ref}
    >
      <source
        srcSet={`/assets/images/${subject}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`/assets/images/${subject}.webp`}
        type="image/webp"
      />
      <img
        src={`/assets/images/${subject}.png`}
        alt={altText}
      />
    </m.picture>
  );
}

export default Headshot;
