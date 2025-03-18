"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Pokemon } from "@/types";
import { fetchPokemonById } from "@/lib/api/fetchPokemon";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useLocalStorage<number[]>(
    "favorites",
    []
  );

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        if (favoriteIds.length === 0) {
          setFavorites([]);
          setLoading(false);
          return;
        }

        const pokemonList = await Promise.all(
          favoriteIds.map(async (id: number) => {
            const data = await fetchPokemonById(id);

            return {
              id: data.id,
              name: data.name,
              image: data.sprites.other["official-artwork"].front_default,
              types: data.types,
            };
          })
        );

        setFavorites(pokemonList);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favoriteIds]);

  const isFavorite = (id: number) => {
    return favoriteIds.includes(id);
  };

  const toggleFavorite = (id: number) => {
    if (isFavorite(id)) {
      setFavoriteIds(favoriteIds.filter((favId) => favId !== id));
    } else {
      setFavoriteIds([...favoriteIds, id]);
    }

    return !isFavorite(id);
  };

  return { favorites, loading, isFavorite, toggleFavorite };
}
