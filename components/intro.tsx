"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Contact } from "lucide-react";
import { LuLinkedin } from "react-icons/lu";
import {
  FaDownload,
  FaGithubSquare,
} from "react-icons/fa";

import { Button } from "./ui/button";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover"
            ></Image>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            ✌
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hi, I&apos;m Manh Le.
        </span>{" "}
        I&apos;m a{" "}
        <span className="font-bold">
          frontend developer
        </span>{" "}
        who enjoy building sites and apps. My
        current focus is{" "}
        <span className="underline">React,</span>
        <span className="underline">
          {" "}
          Next.js
        </span>{" "}
        and{" "}
        <span className="underline">
          Tailwind CSS
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Button
          asChild
          variant="default"
          className="rounded-full"
        >
          <Link
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here
            <Contact className="w-4 h-4 ml-2 "></Contact>
          </Link>
        </Button>
        <Button
          asChild
          className="rounded-full"
          variant="secondary"
        >
          <a
            href="/my-cv.pdf"
            download
          >
            Download CV
            <FaDownload className="ml-2"></FaDownload>
          </a>
        </Button>
        <Button
          asChild
          className="rounded-full"
          variant="secondary"
        >
          <a
            href="https://www.linkedin.com/in/manh-le-b70832241/"
            target="_blank"
          >
            <LuLinkedin></LuLinkedin>
          </a>
        </Button>
        <Button
          asChild
          className="rounded-full"
          variant="secondary"
        >
          <a
            href="https://github.com/Arceus208"
            target="_blank"
          >
            <FaGithubSquare></FaGithubSquare>
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
