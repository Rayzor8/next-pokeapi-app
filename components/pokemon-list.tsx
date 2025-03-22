import { PokemonType } from "@/enums";
import { usePokemonByType } from "@/hooks/usePokemon";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { CardSkeleton } from "./card-skeleton";
import { PokemonCard } from "./pokemon-card";
import { Pagination } from "./pagination";

import { TypeFilter } from "./pokemon-filter";
import { PokemonBadge } from "./pokemon-badge";
import { motionVariant } from "@/lib/const";

export default function PokemonList() {
  const [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useState<PokemonType>(
    PokemonType.ALL
  );

  const limit = 12;
  const { pokemonList, loading, totalPages } = usePokemonByType(
    selectedType,
    page,
    limit
  );

  const handlePrevPage = () => setPage((prevPage) => prevPage - 1);
  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handleTypeChange = (type: PokemonType) => {
    setSelectedType(type);
    setPage(1);
  };

  if (loading) {
    return <CardSkeleton limit={limit} />;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
          <span>Showing {pokemonList.length} Pokemon</span>
          {selectedType !== "all" && (
            <span>
              {" "}
              of type{" "}
              <PokemonBadge type={selectedType} />
            </span>
          )}
        </div>
        <TypeFilter
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
        />
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={motionVariant.container}
        initial="hidden"
        animate="show"
      >
        {pokemonList.map((pokemon) => (
          <motion.div key={pokemon.id} variants={motionVariant.item}>
            <PokemonCard pokemon={pokemon} />
          </motion.div>
        ))}
      </motion.div>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          className="mt-8"
        />
      )}
    </div>
  );
}
