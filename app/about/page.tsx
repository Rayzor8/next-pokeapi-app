"use client";

import type React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  GitPullRequestIcon,
  Globe,
  Code,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PokeBall } from "@/components/pokeball";

import { motion } from "framer-motion";

const techNames = [
  "Next.js",
  "Tailwind CSS",
  "ShadCN UI",
  "TypeScript",
  "PokéAPI",
];

const techStacks = [
  {
    id: 1,
    name: "Front end",
    infos: [
      {
        infoName: "Next.js",
        infoDesc: "React framework for building web applications",
      },
      {
        infoName: "Tailwind CSS",
        infoDesc: "Utility-first CSS framework",
      },
      {
        infoName: "Shadcn UI",
        infoDesc: "Accessible components and a code distribution platform",
      },
      {
        infoName: "Framer Motion",
        infoDesc: "A production-ready motion library for React",
      },
      {
        infoName: "Typescript",
        infoDesc:
          "Strongly typed programming language that builds on JavaScript",
      },
    ],
  },
  {
    id: 2,
    name: "Data",
    infos: [
      {
        infoName: "PokéAPI",
        infoDesc: "API for accessing information about Pokémon",
      },
      {
        infoName: "LocalStorage",
        infoDesc: "For storing favorite Pokémon and theme preferences",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div>
      <motion.div
        className="rounded-3xl bg-theme p-8 md:p-12 mb-10 shadow-xl relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute -right-20 -top-20 opacity-20">
          <PokeBall className="w-64 h-64 animate-spin-slow" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4 text-theme" />
              </Button>
            </Link>

            <motion.h1
              className="text-3xl md:text-4xl font-bold text-theme"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About PokeExplorer
            </motion.h1>
          </div>

          <p className="text-lg text-theme mb-6">
            PokeExplorer is a modern web application built with Next.js that
            showcases Pokémon data from the PokéAPI. Explore, search, and
            discover your favorite Pokémon with a beautiful, responsive
            interface.
          </p>

          <div className="flex flex-wrap gap-3 ">
            {techNames.map((name, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-12 bg-theme rounded-3xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-theme mb-4">Technology Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((stack, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-white mb-4 text-theme">
                {stack.name}
              </h3>
              <ul className="space-y-2">
                {stack.infos.map((info, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                  >
                    {stack.id === 1 ? (
                      <Code className="h-5 w-5 text-blue-400" />
                    ) : (
                      <Database className="h-5 w-5 text-green-400" />
                    )}
                    <p className="text-theme">
                      <span className="font-semibold">{info.infoName}</span> :{" "}
                      <span className="italic">{info.infoDesc}</span>
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mb-12 bg-theme rounded-3xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-theme mb-4">About PokéAPI</h2>

        <motion.p
          className="text-theme mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          This website uses data from the PokéAPI, a RESTful API that provides
          comprehensive Pokémon data. PokéAPI is a free and open-source API that
          serves over 10 billion API calls each month.
        </motion.p>

        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://pokeapi.co/"
            className="flex items-center gap-2 px-6 py-3 text-white bg-gray-900 dark:bg-white dark:text-black rounded "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-5 w-5" />
            Visit PokéAPI
          </a>
        </motion.div>
      </motion.div>

      <a
        href="https://github.com/Rayzor8/next-pokeapi-app"
        className="inline-flex items-center font-semibold gap-1 hover:text-gray-700 transition-colors text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitPullRequestIcon className="h-4 w-4" />
        View on GitHub
      </a>
    </div>
  );
}
