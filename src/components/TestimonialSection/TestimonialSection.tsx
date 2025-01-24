import React from "react";
import SlideIntoView from "../SlideIntoView";
import styles from "./TestimonialSection.module.css";
import Testimonials from "../Testimonials";
import { TESTIMONIAL_LIST_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

async function TestimonialSection() {
  const testimonialArray = await sanityFetch({
    query: TESTIMONIAL_LIST_QUERY,
  });

  return (
    <SlideIntoView id="testimonials">
      <div
        className={`wrapper ${styles.wrapper}`}
        aria-label="What makes Sam a great SE?"
      >
        <h2>hear from people i've worked with</h2>
        <Testimonials data={testimonialArray?.data} />
      </div>
    </SlideIntoView>
  );
}

export default TestimonialSection;
