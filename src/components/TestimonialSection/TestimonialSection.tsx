"use client";
import React from "react";
import SlideIntoView from "../SlideIntoView";
import styles from "./TestimonialSection.module.css";
import { m } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import Testimonials from "../Testimonials";
import type { TestimonialCard } from "../Testimonials";
import MattProfilePic from "@/assets/testimonialPics/matt.jpeg";
import BronaghProfilePic from "@/assets/testimonialPics/bronagh.jpeg";
import MannyProfilePic from "@/assets/testimonialPics/manny.jpeg";
import PaulProfilePic from "@/assets/testimonialPics/paul.jpeg";
import ArsalanProfilePic from "@/assets/testimonialPics/arsalan.jpeg";
import GabbyProfilePic from "@/assets/testimonialPics/gabby.jpg";

function TestimonialSection() {
  const { variants } = React.useContext(AnimationContext);

  return (
    <SlideIntoView id="testimonials">
      <m.div
        className={`wrapper ${styles.wrapper}`}
        aria-label="What makes Sam a great SE?"
        variants={variants.fade}
        initial="start"
        animate="end"
      >
        <h2>hear from people i've worked with</h2>
        <Testimonials data={testimonials} />
      </m.div>
    </SlideIntoView>
  );
}

export default TestimonialSection;

const testimonials: TestimonialCard[] = [
  {
    name: "Matt Kay",
    title: "Co-founder",
    company: "Skillstore",
    content: (
      <>
        <p>
          <strong>
            Sam's technical skills are impressive - he consistently ships
            production code and integrates complex APIs at a high level.
          </strong>
        </p>
        <p>
          His background as a successful AE combined with strong technical
          capabilities makes him stand out - he understands what our customers
          want and how to build the solutions they need.
        </p>
      </>
    ),
    id: "Matt",
    profilePic: MattProfilePic,
  },
  {
    name: "Brónagh Crowley",
    title: "VP Sales",
    company: "Hopin",
    content: (
      <>
        <p>
          <strong>
            Part of Sam’s role included training and enablement of the global
            sales org as we launched new products and SKUs.
          </strong>
        </p>
        <p>
          This was vital for our company sales strategy and Sam was particularly
          successful here.
        </p>
      </>
    ),
    id: "Bronagh",
    profilePic: BronaghProfilePic,
  },
  {
    name: "Enmanuel Cruz",
    title: "Senior Sales Engineer",
    company: "Hopin",
    content: (
      <>
        <p>
          <strong>
            Before there was an SC team who maintained demos and created
            environments geared towards verticals, there was Sam.
          </strong>
        </p>
        <p>
          He was fundamental to the success of the SC team that was newly
          forming and didn't have many teams to lean on for support and
          training.
        </p>
      </>
    ),
    id: "Manny",
    profilePic: MannyProfilePic,
  },
  {
    name: "Paul Glendinning",
    title: "Previous Client",
    company: "Shopify",
    content: (
      <p>
        There is much to say about Sam which include{" "}
        <strong>professional, detailed, driven and personable</strong>. He took
        the time to get to know me, and what my team needed.
      </p>
    ),
    id: "Paul",
    profilePic: PaulProfilePic,
  },
  {
    name: "Gabrielle Jacques",
    title: "SDR Leader",
    company: "Poka",
    content: (
      <>
        <p>
          Sam is a breeze to work with due to his dedication at being the best
          at what he does.{" "}
        </p>
        <p>
          <strong>
            A smart, fast learner that picks up on everything quickly, Sam can
            master an industry, personas, value props, pain points,
            processes/tech stack… anything really in a heart beat.
          </strong>
        </p>
      </>
    ),
    id: "Gabby",
    profilePic: GabbyProfilePic,
  },
  {
    name: "Arsalan Zahid",
    title: "Previous Client",
    company: "Nestlé",
    content: (
      <p>
        <strong>
          Every presentation that Sam did was catered to keep the needs of my
          organisation at heart
        </strong>{" "}
        and the relationship he built was more than someone just trying to sell
        me a platform.
      </p>
    ),
    id: "Arsalan",
    profilePic: ArsalanProfilePic,
  },
];
