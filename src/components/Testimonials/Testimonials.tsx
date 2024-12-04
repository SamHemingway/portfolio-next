import React from "react";
import styles from "./Testimonials.module.css";
import { Masonry } from "react-plock";
import { m } from "framer-motion";
import { AnimationContext } from "../../contexts/AnimationProvider";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface TestimonialCard {
  name: string;
  title: string;
  company: string;
  content: React.ReactNode;
  profilePic: StaticImageData;
  id: string;
  important?: boolean;
}

function Testimonials({ data }: { data: TestimonialCard[] }) {
  const { variants } = React.useContext(AnimationContext);

  return (
    <Masonry
      items={data}
      config={{
        columns: [1, 2, 3],
        gap: [-48, 48, 48],
        media: [800, 1280, 1440],
      }}
      style={undefined}
      className={styles.deck}
      render={(item, idx) => (
        <Link
          href="https://www.linkedin.com/in/sam-hemingway/details/recommendations/?detailScreenTabIndex=0"
          style={{ textDecoration: "none" }}
        >
          <m.li
            key={idx}
            className={styles.cardWrapper}
            variants={variants.testimonialCards}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            tabIndex={-1}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardTopSection}>
                <Image
                  className={styles.cardImage}
                  src={item.profilePic}
                  alt=""
                />
                <div>
                  <h3 className={styles.name}>{item.name}</h3>
                  <h4 className={styles.title}>
                    {item.title}, {item.company}
                  </h4>
                </div>
              </div>
              {item.content}
            </div>
          </m.li>
        </Link>
      )}
    />
  );
}

export default Testimonials;
