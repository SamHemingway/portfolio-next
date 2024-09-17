"use client";
import React from "react";
import { motion, useInView, MotionProps } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";

interface SlideIntoView {
  children: React.ReactNode;
}

type finalType = SlideIntoView & React.HTMLProps<HTMLElement> & MotionProps;

function SlideIntoView({ children, ...delegated }: finalType) {
  const { shouldReduceMotion } = React.useContext(AnimationContext);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ y: "0px" }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? "0px" : shouldReduceMotion ? "0px" : "50px",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
      {...delegated}
    >
      {children}
    </motion.section>
  );
}

export default SlideIntoView;
