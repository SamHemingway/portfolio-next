import React, { ForwardedRef } from "react";
import styles from "./Heading.module.css";
import { motion, MotionProps } from "framer-motion";
import { AnimationContext } from "../../../contexts/AnimationProvider";

interface HeaderProps extends MotionProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ level, children, ...delegated }, ref: ForwardedRef<HTMLElement>) => {
    const TagPrimitive = `h${level || 1}` as keyof JSX.IntrinsicElements;
    const { variants } = React.useContext(AnimationContext);

    const MotionTag = motion(TagPrimitive as React.ElementType);

    let computedStyles = `${styles.headerBase}`;
    if (level) computedStyles += ` ${styles[level]}`;

    return (
      <MotionTag
        ref={ref}
        className={computedStyles}
        {...delegated}
        variants={variants.fadeNoDelay}
        initial="start"
        animate="end"
      >
        {children}
      </MotionTag>
    );
  }
);

Header.displayName = "Header";

export default Header;
