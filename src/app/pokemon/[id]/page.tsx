import Details from "@/components/details";
import { Badge } from "@/components/ui/badge";
import { pokemonTypes } from "@/types/type";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getPokemon(id: string) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function PokemonDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  if (!pokemon) {
    notFound();
  }

  return (
    <div className="flex flex-col bg-gray-50 h-screen p-6">
      <Link href={"/"}>
        <p className="flex gap-2 items-center text-zinc-950 font-semibold text-lg m-4">
          <ArrowLeft /> Back to pokemon page
        </p>
      </Link>
      <div className="flex w-full items-center justify-center h-full">
        <div className="flex rounded-lg shadow-xl overflow-hidden h-[70vh] w-auto">
          <div className="h-[300px] flex flex-col justify-center items-center px-4">
            <div className="relative w-72 h-72 mb-4">
              <Image
                src={
                  pokemon.sprites.other["official-artwork"].front_default ||
                  pokemon.sprites.front_default
                }
                alt={pokemon.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-zinc-950 capitalize font-semibold text-2xl">
              {pokemon?.name}
            </h1>
            <h1 className="text-gray-600 font-medium">
              #{(id as string).padStart(3, "0")}
            </h1>
            <div className="flex gap-2 mt-3">
              {pokemon.types.map((type: any) => (
                <Badge
                  key={type.type.name}
                  className={`${
                    (pokemonTypes as any)[type.type.name] || "bg-gray-500"
                  } text-white capitalize`}
                  title={type.type.name}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full h-full bg-white items-center p-2">
            <Details pokemon={pokemon} />
          </div>
        </div>
      </div>
    </div>
  );
}
