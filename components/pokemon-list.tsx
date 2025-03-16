import { PokemonType } from "@/enums";
import { usePokemonByType } from "@/hooks/usePokemon";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { CardSkeleton } from "./card-skeleton";
import { PokemonCard } from "./pokemon-card";
import { Pagination } from "./pagination";
import { motionVariant } from "@/lib/const/motion-variant";

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

  if (loading) {
    return <CardSkeleton limit={limit} />;
  }

  return (
    <div>
      <Button onClick={() => setSelectedType(PokemonType.DARK)} className="mb-6">
        Change Type to {selectedType}
      </Button>

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
