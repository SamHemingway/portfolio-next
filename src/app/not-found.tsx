import Link from "next/link";
import Hero from "@/components/Hero";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <Hero title="Page not found">
      <h2 className={styles.leadHeader}>
        <span role="text">Seems like you're lost, friend!</span>
      </h2>
      <p
        role="text"
        className={styles.leadBody}
      >
        <Link
          href="/"
          scroll={false}
        >
          Head back to the home page
        </Link>
        .
      </p>
    </Hero>
  );
}
