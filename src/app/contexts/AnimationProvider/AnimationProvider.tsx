import React from "react";
import useSessionStorageState from "use-session-storage-state";
import { Variants, Variant } from "framer-motion";

interface AnimationProvider {
  children: React.ReactNode;
}

interface AnimationProviderValues {
  shouldReduceMotion: boolean;
  hasVisited: boolean | undefined;
  variants: any;
}

export const AnimationContext =
  React.createContext<AnimationProviderValues | null>(null);

function AnimationProvider({ children }: AnimationProvider) {
  const [hasVisited, setHasVisited] = useSessionStorageState<
    undefined | boolean
  >("hasVisited");

  React.useEffect(() => {
    if (!hasVisited) setHasVisited(true);
  });

  function userPrefersReducedMotion() {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    return mediaQuery.matches;
  }

  const shouldReduceMotion = userPrefersReducedMotion();

  const animationTimings = {
    phaseOne: 0,
    phaseTwo: 2,
    phaseThree: 2.5,
  };

  const variants = {
    fade: {
      start: {
        opacity: hasVisited ? 1 : 0,
      },
      end: {
        opacity: 1,
        transition: {
          delay: hasVisited ? 0 : animationTimings.phaseThree,
        },
      },
    },
    fadeNoDelay: {
      start: {
        opacity: 0,
      },
      end: {
        opacity: 1,
      },
    },
    springUp: {
      start: {
        opacity: hasVisited ? 1 : 0,
        y: shouldReduceMotion || hasVisited ? 0 : "50px",
      },
      end: {
        opacity: 1,
        y: 0,

        transition: {
          delay: hasVisited ? 0 : 2,
          type: "spring",
          stiffness: 100,
        },
      },
    },
    springDown: {
      start: {
        opacity: hasVisited ? 1 : 0,
        y: shouldReduceMotion || hasVisited ? 0 : "-50px",
      },
      finish: {
        opacity: 1,
        y: 0,

        transition: {
          duration: 1,
          delay: hasVisited ? 0 : animationTimings.phaseTwo,
          type: "spring",
          stiffness: 100,
        },
      },
    },
    springRight: {
      start: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 50,
      },
      end: {
        opacity: 1,
        y: 0,
      },
    },
    childrenShortStagger: {
      end: {
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.1,
        },
      },
    },
    cards: {
      title: {
        start: {
          backgroundPosition: "1em 0em",
          transition: { duration: "0.75", ease: "easeOut" },
        },
        hover: {
          backgroundPosition: shouldReduceMotion ? "1em 0em" : "1em 1em",
          backgroundColor: "hsla(33, 99%, 75%, 1)",
        },

        tap: {
          backgroundPosition: shouldReduceMotion ? "1em 0em" : "1em 1.5em",
          backgroundColor: "hsla(33, 99%, 75%, 1)",
        },
      },
      icon: {
        start: { scale: 1, transition: { duration: "0.75", ease: "easeOut" } },
        hover: { scale: shouldReduceMotion ? 1 : 1.05 },
        tap: { scale: shouldReduceMotion ? 1 : 0.95 },
      },
      panel: {
        start: {
          opacity: 0,
        },
        end: {
          opacity: 1,
        },
      },
      text: {
        start: { y: shouldReduceMotion ? 0 : -20, opacity: 0 },
        end: { y: 0, opacity: 1 },
      },
    },
    hamburgerIcon: {
      wrapper: {
        open: !shouldReduceMotion ? undefined : { fill: "black" },
      },
      line1: {
        open: shouldReduceMotion
          ? undefined
          : { d: "M 25 25 L 75 75", stroke: "white" },
      },
      line2: {
        open: shouldReduceMotion ? undefined : { opacity: 0 },
      },
      line3: {
        open: shouldReduceMotion
          ? undefined
          : { d: "M 25 75 L 75 25", stroke: "white" },
      },
    },
    projectCards: shouldReduceMotion
      ? {
          initial: {
            outline: "5px solid",
            outlineColor: "hsla(358, 99%, 71%, 0)",
          },
          hover: {
            outline: "5px solid",
            outlineColor: "hsla(33, 99%, 70%, 1)",
          },
          tap: {
            outline: "5px solid",
            outlineColor: "hsla(358, 99%, 71%, 1)",
          },
        }
      : {
          initial: { scale: 1 },
          hover: { scale: 1.025 },
          tap: { scale: 0.975 },
        },
  };

  return (
    <AnimationContext.Provider
      value={{
        shouldReduceMotion,
        hasVisited,
        variants,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationProvider;
