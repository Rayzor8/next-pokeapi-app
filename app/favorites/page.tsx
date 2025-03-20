"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PokemonCard } from "@/components/pokemon-card";
import { motion } from "framer-motion";
import useFavorites from "@/hooks/useFavorites";
import { motionVariant } from "@/lib/const/motion-variant";
import { CardSkeleton } from "@/components/card-skeleton";
import BoxWhite from "@/components/custom-ui/box-white";

export default function FavoritesPage() {
  const { favorites, loading } = useFavorites();

  if (loading)
    return (
      <BoxWhite>
        <CardSkeleton limit={4} />
      </BoxWhite>
    );

  return (
    <BoxWhite>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Your Favorite Pokémon
        </h1>
      </div>

      {favorites.length > 0 ? (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={motionVariant.container}
          initial="hidden"
          animate="show"
        >
          {favorites.map((pokemon) => (
            <motion.div key={pokemon.id} variants={motionVariant.item}>
              <PokemonCard pokemon={pokemon} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            You haven`t added any Pokémon to your favorites yet.
          </p>
          <Link href="/" className="mt-4 inline-block">
            <Button>Explore Pokémon</Button>
          </Link>
        </div>
      )}
    </BoxWhite>
  );
}
