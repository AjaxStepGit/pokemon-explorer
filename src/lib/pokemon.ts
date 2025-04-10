// lib/pokemon.ts (or wherever you define this function)
async function getPokemons(
  offset: number = 0,
  limit: number = 20,
  name?: string
) {
  const BASE_URL = "https://pokeapi.co/api/v2";

  if (name) {
    // Fetch a specific Pokémon by name
    const res = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch Pokémon: ${name}`);
    }

    const pokemon = await res.json();
    // Return in a format compatible with PokemonApiResult
    return {
      results: [pokemon],
      count: 1,
      next: null,
      previous: null,
    };
  }

  // Fetch paginated list if no name is provided
  const res = await fetch(
    `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const pokemonResults = await res.json();
  return pokemonResults;
}

export { getPokemons };
