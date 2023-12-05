import React from "react";

import { LuProjector } from "react-icons/lu";
import aiAppImg from "@/public/aiapp.png";
import trelloImg from "@/public/trello.png";
import chatPDFImg from "@/public/chatpdf.png";
import ecomImg from "@/public/ecom.png";
import discordImg from "@/public/discord.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Praktikum",
    location: "Universität Leipzig",
    description:
      "I worked with my colleagues to develop an application for evaluating diverse non-functional aspects of software systems( Green Configurator).",
    icon: React.createElement(LuProjector),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Discord Clone",
    description:
      "An app like Discord for chatting and video calls.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
    ],
    imageUrl: discordImg,
    url: "https://discord-clone-arceus208.vercel.app",
  },
  {
    title: "ChatPdf Clone",
    description:
      "An app like ChatPdf where user can upload PDF files and chat with AI bot",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "PineconeDB",
    ],
    imageUrl: chatPDFImg,
    url: "https://chatpdf-omega.vercel.app",
  },
  {
    title: "Trello Clone",
    description:
      "Trello Clone with workspaces, boards, lists, cards, audit logs / activity as well as member roles.",
    tags: [
      "React",
      "Next.js",
      "Prisma",
      "Tailwind",
      "MongoDB",
    ],
    imageUrl: trelloImg,
    url: "https://trello-cyan.vercel.app",
  },
  {
    title: "Ecommerce App",
    description:
      "A website for selling Yugioh-cards and accessories.",
    tags: ["React", "ExpressJS", "MongoDB"],
    imageUrl: ecomImg,
    url: "https://frontend-arceus208.vercel.app",
  },
  {
    title: "AI generated content app",
    description:
      "A website that lets user interact with the AI for generating music or picture",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
    ],
    imageUrl: aiAppImg,
    url: "https://ai-saas-nu-six.vercel.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
