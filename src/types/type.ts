export interface PokemonApiResult {
  count: number;
  next: string | null | undefined;
  previous: string | null | undefined;
  results: Results[];
}

export interface Results {
  name: string | null;
  url: string | null;
  id: string | null;
}

export interface PokemonDetailsApiresult {}

export const pokemonTypes = {
  normal: "bg-gray-400",
  fire: "bg-orange-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-blue-200",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-purple-700",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-300",
};
