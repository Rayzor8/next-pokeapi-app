import { useEffect, useState, useCallback } from "react";
import { PokemonType } from "@/enums";
import { Pokemon, PokemonDetails } from "@/types";
import {
  fetchPokemonById,
  fetchPokemonBySearch,
  fetchPokemonByType,
} from "@/lib/api/fetchPokemon";

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

export function usePokemonBySearch(query: string, page: number, limit: number) {
  const [results, setResults] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const searchPokemon = async () => {
      setLoading(true);
      try {
        const { searchResults, totalResults, totalPages } =
          await fetchPokemonBySearch(query, page, limit);
        setTotalResults(totalResults);
        setTotalPages(totalPages);

        setResults(searchResults);
      } catch (error) {
        console.error("Error searching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      searchPokemon();
    } else {
      setResults([]);
      setTotalResults(0);
      setTotalPages(0);
      setLoading(false);
    }
  }, [query, page, limit]);

  return { results, loading, totalPages, totalResults };
}

export function usePokemonDetails(id: number) {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonById(id);
        setPokemon(data);
      } catch (error) {
        console.log("Error fetching Pokémon details:", error);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  return { pokemon, loading };
}
