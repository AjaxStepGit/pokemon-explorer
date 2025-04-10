import { Results } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: Results;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = pokemon?.url?.split("/")[6];

  console.log("Pokemon", pokemon);

  return (
    <Link href={`/pokemon/${id ?? pokemon?.id}`}>
      <div className="flex flex-col w-full bg-white border border-gray-200 w-full h-[250px] shadow-lg rounded-lg text-white transition-transform transform hover:translate-y-[-2px]">
        <div className="bg-gray-100 w-full flex justify-center p-6">
          <div className="relative w-32 h-32">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                id ?? pokemon?.id
              }.png`}
              alt={pokemon.name ?? "pokemon"}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-gray-600 text-center mt-1">
          #{String(id ?? pokemon?.id)?.padStart(3, "0")}
        </p>
        <p className="text-zinc-900 capitalize text-lg text-center mt-1">
          {pokemon.name}
        </p>
      </div>
    </Link>
  );
}
