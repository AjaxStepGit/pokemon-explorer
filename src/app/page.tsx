// app/page.tsx
import PaginationSection from "@/components/pagination";
import PokemonCard from "@/components/pokemon-card";
import SearchInput from "@/components/search-input";
import { getPokemons } from "@/lib/pokemon";
import * as motion from "motion/react-client";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ offset?: string; limit?: string; search?: string }>;
}) {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); For loading Purpose

  const resolvedSearchParams = await searchParams;
  const offset = Number(resolvedSearchParams.offset) || 0;
  const limit = Number(resolvedSearchParams.limit) || 20;
  const search = resolvedSearchParams.search || undefined;

  const pokemonList = await getPokemons(offset, limit, search);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "linear" }}
      exit={{ opacity: 0 }}
      className="relative w-full h-full bg-gray-50 p-4 pokemon-scrollbar"
      style={{
        background: "linear-gradient(to bottom, #ffffcc 0%, #ff0066 100%)",
      }}
    >
      <div className="absolute z-5  w-full h-full" />
      <div className="relative z-10 flex h-auto w-full flex-col gap-2 items-center">
        <h1 className="text-5xl my-2 text-center h-auto font-bold">
          Pokémon Explorer
        </h1>
        <div className="flex w-full justify-center">
          <SearchInput initialSearch={search || ""} />
        </div>
      </div>
      <div className="relative z-10 border border-white mt-6 w-full" />
      <div className="relative z-10 flex flex-col p-4 w-full h-full">
        <div className="grid grid-cols-5 gap-4 w-full">
          {pokemonList?.results.map((pokemon: any, index: number) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </div>
        <PaginationSection
          pokemon={pokemonList}
          offset={offset}
          limit={limit}
        />
        <div className="border border-gray-200 mt-6 w-full" />
      </div>
    </motion.div>
  );
}
