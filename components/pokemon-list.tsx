import { PokemonType } from "@/enums";
import { usePokemonByType } from "@/hooks/usePokemon";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

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

  console.log(pokemonList);
  return (
    <div className="flex flex-col gap-4 items-start">
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            <Image
              src={pokemon.image || "/placeholder.svg"}
              alt={pokemon.name}
              width="50"
              height="50"
              className="object-contain hover:scale-110 transition-transform duration-300"
              priority={page === 1}
            />
            <span>{pokemon.name}</span>
          </li>
        ))}
      </ul>
      <span>loading status : {loading ? "loading" : "not loading"}</span>

      <span>total pages: {totalPages}</span>

      <Button onClick={() => setSelectedType(PokemonType.DARK)}>
        Change Type to {selectedType}
      </Button>

      <div className="space-x-4">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
