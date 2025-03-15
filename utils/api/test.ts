import { API_ENDPOINTS } from "@/config/api-config";
import { PokemonType } from "@/enums";

const fetchJSON = async (url: string) => (await fetch(url)).json();

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

export const fetchPokemonByType = async (
  type: PokemonType,
  page: number,
  limit: number
) => {
  if (type === PokemonType.ALL) {
    const { results, count } = await fetchJSON(
      `${API_ENDPOINTS.POKEMON}?limit=${limit}&offset=${(page - 1) * limit}`
    );
    return {
      pokemonList: await Promise.all(
        results.map((p: { url: string }) => fetchPokemonDetails(p.url))
      ),
      totalPages: Math.ceil(count / limit),
    };
  }

  const { pokemon } = await fetchJSON(`${API_ENDPOINTS.POKEMON_TYPE}/${type}`);
  return {
    pokemonList: await Promise.all(
      pokemon
        .slice((page - 1) * limit, page * limit)
        .map((p: { pokemon: { url: string } }) =>
          fetchPokemonDetails(p.pokemon.url)
        )
    ),
    totalPages: Math.ceil(pokemon.length / limit),
  };
};
