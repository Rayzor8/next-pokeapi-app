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
import { AnimatedSection } from "./animated-section";

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
      <AnimatedSection>
        <div className="rounded-3xl bg-theme p-8 md:p-12 mb-10 shadow-xl relative overflow-hidden">
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
              <h1 className="text-3xl md:text-4xl font-bold text-theme">
                About PokeExplorer
              </h1>
            </div>

            <p className="text-lg text-theme mb-6">
              PokeExplorer is a modern web application built with Next.js that
              showcases Pokémon data from the PokéAPI. Explore, search, and
              discover your favorite Pokémon with a beautiful, responsive
              interface.
            </p>

            <div className="flex flex-wrap gap-3 ">
              {techNames.map((name, idx) => (
             
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-12 bg-theme rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-theme mb-4">
            Technology Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStacks.map((stack, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold text-white mb-4 text-theme">
                  {stack.name}
                </h3>
                <ul className="space-y-2">
                  {stack.infos.map((info, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {stack.id === 1 ? (
                        <Code className="h-5 w-5 text-blue-400" />
                      ) : (
                        <Database className="h-5 w-5 text-green-400" />
                      )}
                      <p className="text-theme">
                        <span className="font-semibold">{info.infoName}</span> :{" "}
                        <span className="italic">{info.infoDesc}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-12 bg-theme rounded-3xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-theme mb-4">About PokéAPI</h2>

          <p className="text-theme mb-6">
            This website uses data from the PokéAPI, a RESTful API that provides
            comprehensive Pokémon data. PokéAPI is a free and open-source API
            that serves over 10 billion API calls each month.
          </p>

          <div className="flex justify-start">
            <a
              href="https://pokeapi.co/"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 rounded text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-5 w-5" />
              Visit PokéAPI
            </a>
          </div>
        </div>
      </AnimatedSection>


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
