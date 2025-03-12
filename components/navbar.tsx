"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PokeBall } from "./pokeball";
export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/favorites",
      text: "Favorites",
    },
    {
      href: "/about",
      text: "About",
    },
  ];

  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <PokeBall className="w-10 h-10 animate-spin-slow" />
          <h1 className="text-3xl font-bold text-white dark:text-white font-kanit italic">
            PokeExplorer
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <nav className="flex gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium italic ${
                  isActive(link.href)
                    ? "text-accent-yellow"
                    : "text-white hover:text-accent-yellow"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
