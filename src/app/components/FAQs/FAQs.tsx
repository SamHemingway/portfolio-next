import React from "react";
import CollapsibleCardDeck from "../CollapsibleCardDeck";
import SlideIntoView from "../SlideIntoView";
import styles from "./FAQs.module.css";

function FAQs() {
  const questions = [
    {
      title: "Where are you based?",
      content: (
        <p>
          Montréal, Canada, where I have permanent residency (I'm originally
          from the UK)!
        </p>
      ),
      id: "where",
    },
    {
      title: "Do you speak French?",
      content: (
        <p lang="fr">
          Oui, au niveau B2. Il faut dire que je n'ai jamais eu l'occasion de
          l'utiliser dans la vie professionnelle - tous les emplois que j'ai
          occupés jusqu'à présent l'ont été a les entreprises où l'anglais est
          la langue principale.
        </p>
      ),
      id: "langue",
    },
    {
      title: "How did you learn to code?",
      content: (
        <>
          <p>
            Self-taught. I looked at boot camps, but outside of the networking
            opportunities, I wasn't convinced they were value for money.
          </p>
          <p>If you're interested in which specific courses I completed:</p>
          <ul>
            <li>
              <a href="https://css-for-js.dev/">
                <cite>CSS for JS developers</cite> by Josh Comeau
              </a>
            </li>
            <li>
              <a href="https://www.joyofreact.com/">
                <cite>The Joy of React</cite> by Josh Comeau
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/course/the-complete-javascript-course/">
                <cite>JS Bootcamp</cite> by Jonas Schmedtmann
              </a>
            </li>
          </ul>
          <p>Otherwise, I independently honed my skills via resources like:</p>
          <ul>
            <li>
              <a href="https://www.frontendmentor.io/profile/SamHemingway">
                Frontend Mentor
              </a>{" "}
              to get experience building sites from Figma files.
            </li>
            <li>
              <a href="https://www.codewars.com/users/SamHemingway">Codewars</a>{" "}
              to test my understanding of basic JS concepts.
            </li>
            <li>
              Using official documentation to learn React libraries like{" "}
              <a href="https://www.framer.com/motion/">Framer Motion</a>,{" "}
              <a href="https://www.radix-ui.com/">Radix UI</a> &{" "}
              <a href="https://headlessui.com/">Headless UI</a>.
            </li>
          </ul>
        </>
      ),
      id: "learn",
    },
  ];

  return (
    <SlideIntoView id="faqs">
      <div className={`wrapper ${styles.wrapper}`}>
        <h2>faqs</h2>
        <CollapsibleCardDeck
          data={questions}
          doubleColumn
        />
      </div>
    </SlideIntoView>
  );
}

export default FAQs;
