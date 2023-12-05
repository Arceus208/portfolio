"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.85);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a recent computer science
        graduate with a fervent passion for{" "}
        <span className="font-medium">
          frontend development
        </span>
        . The aspect of frontend development that
        truly{" "}
        <span className="italic">
          resonates with me
        </span>{" "}
        is the opportunity to design visually
        stunning and user-friendly websites,
        coupled with the experience of solving
        problems creatively. I enjoy the
        satisfaction of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js and MongoDB
        </span>
        . I&apos;m always looking to learn new
        technologies. I&apos;m currently looking
        for a{" "}
        <span className="font-medium">
          full-time position
        </span>{" "}
        as a frontend developer.
      </p>
      <p>
        When I&apos;m not coding, I enjoy playing
        video games, hanging out with friends,
        watching movies or football. I also have a
        big passion for building with Lego
        bricks,as it was a part of my childhood
        😁.{" "}
      </p>
    </motion.section>
  );
}
