import { useEffect, useState, useCallback } from "react";
import { PokemonType } from "@/enums";
import { Pokemon } from "@/types";
import { fetchPokemonByType } from "@/utils/api/fetchPokemonByType";

export function usePokemonByType(
  type: PokemonType,
  page: number,
  limit: number
) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { pokemonList, totalPages } = await fetchPokemonByType(
        type,
        page,
        limit
      );
      setPokemonList(pokemonList);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching Pokémon by type:", error);
    } finally {
      setLoading(false);
    }
  }, [type, page, limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { pokemonList, loading, totalPages };
}
