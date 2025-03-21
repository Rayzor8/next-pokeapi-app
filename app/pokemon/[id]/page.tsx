"use client";

import { CardSkeleton } from "@/components/card-skeleton";
import BoxWhite from "@/components/custom-ui/box-white";
import { Button } from "@/components/ui/button";
import useFavorites from "@/hooks/useFavorites";
import { usePokemonDetails } from "@/hooks/usePokemon";
import { ArrowLeft, Heart } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/lib/const/colors";
import { notFound } from "next/navigation";
import PokemonTabs from "./pokemon-tabs";
import Link from "next/link";

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
    toast.info(`${newState ? "Added" : "Removed"} to favorites`, {
      description: `${
        newState ? `Added ${pokemon?.name}` : `${pokemon?.name} Removed`
      } to favorites`,
    });
  };

  if (loading)
    return (
      <BoxWhite>
        <CardSkeleton limit={1} />
      </BoxWhite>
    );

  if (!pokemon) notFound();

  const getTypeColor = (type: string) => {
    return colors[type] || "bg-gray-400";
  };

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

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-64 w-64 mb-4 animate-float">
            <Image
              src={
                pokemon.sprites.other["official-artwork"].front_default ||
                "/placeholder.svg"
              }
              alt={pokemon.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex gap-2 mt-2">
            {pokemon.types?.map((type) => (
              <Badge
                key={type.type.name}
                className={`${getTypeColor(
                  type.type.name
                )} text-white capitalize px-3 py-1`}
              >
                {type.type.name}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PokemonTabs pokemon={pokemon} getTypeColor={getTypeColor} />
        </motion.div>
      </div>
    </BoxWhite>
  );
}
