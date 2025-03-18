"use client";

import { CardSkeleton } from "@/components/card-skeleton";
import BoxWhite from "@/components/custom-ui/box-white";
import { Button } from "@/components/ui/button";
import useFavorites from "@/hooks/useFavorites";
import { usePokemonDetails } from "@/hooks/usePokemon";
import { ArrowLeft, Heart, Link } from "lucide-react";
import React, { use, useEffect, useState } from "react";

export default function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsId = use(params);

  const { pokemon, loading } = usePokemonDetails(parseInt(paramsId.id));
  const { isFavorite, toggleFavorite } = useFavorites();
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (paramsId.id) {
      setFavorited(isFavorite(Number.parseInt(paramsId.id)));
    }
  }, [paramsId.id, isFavorite]);

  const handleToggleFavorite = () => {
    const newState = toggleFavorite(Number.parseInt(paramsId.id));
    setFavorited(newState);
  };

  if (loading)
    return (
      <BoxWhite>
        <CardSkeleton limit={1} />
      </BoxWhite>
    );

  if (!pokemon) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 dark:text-white">
          Pokémon Not Found
        </h1>
        <p className="mb-4 dark:text-gray-300">
          Sorry, we couldn`t find the Pokémon you`re looking for.
        </p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <BoxWhite>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold capitalize dark:text-white">
            {pokemon.name}{" "}
            <span className="text-gray-500 dark:text-gray-400">
              #{pokemon.id.toString().padStart(3, "0")}
            </span>
          </h1>
        </div>
        <Button
          variant={favorited ? "default" : "outline"}
          size="icon"
          onClick={handleToggleFavorite}
          className={
            favorited
              ? "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
              : ""
          }
        >
          <Heart className={`h-5 w-5 ${favorited ? "fill-white" : ""}`} />
        </Button>
      </div>
    </BoxWhite>
  );
}
