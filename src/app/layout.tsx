import type { Metadata } from "next";
import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HireMe from "@/app/components/HireMe";
import AnimationProvider from "@/app/contexts/AnimationProvider";
import "./styles/globalStyles.css";
import { Quicksand, Rubik } from "next/font/google";

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

export default function RootLayout({
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
        <AnimationProvider>
          <Header />
          <main>{children}</main>
          <HireMe />
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
