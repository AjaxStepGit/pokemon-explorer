import { Results } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: Results;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = pokemon?.url?.split("/")[6];

  return (
    <Link href={`/pokemon/${id ?? pokemon?.id}`}>
      <div className="w-full h-[250px] group" style={{ perspective: "1000px" }}>
        <div
          className="relative w-full h-full transition-transform duration-600 group-hover:[transform:rotateY(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side */}
          <div
            className="absolute w-full h-full bg-white border border-gray-200 shadow-lg rounded-lg flex flex-col"
            style={{ backfaceVisibility: "hidden" }}
          >
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

          {/* Back Side */}
          <div
            className="absolute overflow-hidden w-full h-full bg-blue-500 text-white flex flex-col justify-center items-center [transform:rotateY(180deg)] rounded-lg shadow-lg"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="absolute w-full h-full bg-black opacity-30">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  id ?? pokemon?.id
                }.png`}
                alt={pokemon.name ?? "pokemon"}
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl uppercase font-bold">{pokemon.name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
