"use client";

import React from "react";
import styles from "./Testimonials.module.css";
import { Masonry } from "react-plock";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/utils";
import { components } from "@/sanity/portableTextComponents";
import { TESTIMONIAL_LIST_QUERYResult } from "@/sanity/types";

export default function Testimonials({
  data,
}: {
  data: TESTIMONIAL_LIST_QUERYResult;
}) {
  return (
    <Masonry
      items={data?.testimonials ?? []}
      config={{
        columns: [1, 2, 3],
        gap: [-48, 48, 48],
        media: [800, 1280, 1440],
      }}
      className={styles.deck}
      as={"ul"}
      render={(item, idx) => (
        <li className={styles.cardWrapper}>
          <Link
            href={item.link ?? "#"}
            style={{ textDecoration: "none" }}
            key={idx}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardTopSection}>
                {item.headshot ? (
                  <Image
                    className={styles.cardImage}
                    src={urlFor(item.headshot).url()}
                    alt=""
                    width={100}
                    height={100}
                  />
                ) : null}
                <div>
                  <h3 className={styles.name}>{item.name}</h3>
                  <h4 className={styles.title}>
                    {item.title}, {item.company}
                  </h4>
                </div>
              </div>
              {item.content ? (
                <PortableText
                  value={item.content}
                  components={components}
                />
              ) : null}
            </div>
          </Link>
        </li>
      )}
    />
  );
}
