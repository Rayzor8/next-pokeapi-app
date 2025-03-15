import { API_ENDPOINTS } from "@/config/api-config";
import { PokemonType } from "@/enums";

async function fetchPokemonList(limit: number, offset: number) {
  const response = await fetch(
    `${API_ENDPOINTS.POKEMON}?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
}

async function fetchPokemonDetails(url: string) {
  const id = Number.parseInt(url.split("/")[6]);
  const response = await fetch(`${API_ENDPOINTS.POKEMON}/${id}`);
  const details = await response.json();
  return {
    id,
    name: details.name,
    url,
    image: `${API_ENDPOINTS.POKEMON_IMAGE}/${id}.png`,
    types: details.types,
  };
}

export async function fetchPokemonByType(
  type: PokemonType,
  page: number,
  limit: number
) {
  if (type === PokemonType.ALL) {
    const offset = (page - 1) * limit;
    const data = await fetchPokemonList(limit, offset);

    return {
      pokemonList: await Promise.all(
        data.results.map((p: { name: string; url: string }) =>
          fetchPokemonDetails(p.url)
        )
      ),
      totalPages: Math.ceil(data.count / limit),
    };
  } else {
    const response = await fetch(`${API_ENDPOINTS.POKEMON_TYPE}/${type}`);
    const typeData = await response.json();
    const totalCount = typeData.pokemon.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const currentPagePokemon = typeData.pokemon.slice(startIndex, endIndex);

    return {
      pokemonList: await Promise.all(
        currentPagePokemon.map(
          (entry: { pokemon: { name: string; url: string } }) =>
            fetchPokemonDetails(entry.pokemon.url)
        )
      ), totalPages: Math.ceil(totalCount / limit)
    };
  }
}
