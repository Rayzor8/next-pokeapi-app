"use client";

import BoxWhite from "@/components/custom-ui/box-white";
import PokemonList from "@/components/pokemon-list";
import { SearchBar } from "@/components/search-bar";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <div className="mt-8 max-w-xl mx-auto mb-8">
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>

      <BoxWhite className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Explore Pokemon
        </h2>

        <PokemonList />
      </BoxWhite>
    </div>
  );
}
