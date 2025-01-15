import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HireMe from "@/components/HireMe";
import AnimationProvider from "@/contexts/AnimationProvider";
import "@/styles/globalStyles.css";
import { Quicksand, Rubik } from "next/font/google";
import { LazyMotion, domAnimation } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { SanityLive } from "@/sanity/lib/live";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["400", "700"],
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sam Hemingway — SaaS Sales Professional",
  description:
    "Sam is a SaaS sales professional based in Montreal, Canada. His experience ranges from being a top performing sales rep at a unicorn start-up all the way to consulting on GTM strategy for seed-stage companies.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${rubik.variable}`}
    >
      <body>
        <LazyMotion features={domAnimation}>
          <AnimationProvider>
            <Header />
            <main>{children}</main>
            <HireMe />
            <Footer />
          </AnimationProvider>
        </LazyMotion>
        <SpeedInsights />
        <Analytics />
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}
