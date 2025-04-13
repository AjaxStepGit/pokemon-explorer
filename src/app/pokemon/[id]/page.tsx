import PokemonInfo from "@/components/details";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as motion from "motion/react-client";
import Link from "next/link";

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

const typeColors: any = {
  fire: "#7a1d12", // Darker hex code for fire
  water: "#0f2a4d", // Darker hex code for water
  grass: "#0e2a1a", // Darker hex code for grass
  electric: "#7a6b00", // Darker hex code for electric
  default: "#1a2b2a", // Darker hex code for default
};

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

  const primaryType = await pokemon?.types[0]?.type?.name;
  const color = typeColors[primaryType] || "#1a1a1a"; // Default to a darker color if not found
  const bgColor = primaryType ? color : typeColors.default;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear" }}
      exit={{ opacity: 0 }}
      className={`flex relative flex-col h-screen p-8  items-center w-full overflow-clip pokemon-scrollbar`}
      style={{ backgroundColor: bgColor }}
    >
      <Image
        src={
          pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
          pokemon?.sprites?.front_default ||
          ""
        }
        alt={pokemon?.name || "Pokemon Image"}
        width={200}
        height={200}
        className="absolute z-10 w-auto h-full blur-lg top-50 scale-200 right-0"
        objectFit="contain"
      />
      <div className="flex flex-col z-50 w-full items-center justify-center mb-12">
        <motion.h1
          animate={{ y: [0, -8, 0] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-6xl uppercase font-bold text-white"
        >
          {pokemon.name}
        </motion.h1>
        <motion.div
          className="relative h-1 bg-white max-w-md"
          initial={{ width: "0%" }} // Starts at 0% width
          animate={{
            width: "100%", // Expands to full width on hover
            transition: { duration: 3, ease: "linear" }, // 3 seconds, left-to-right
          }}
          // Reset transition when not hovering
          transition={{ duration: 0 }} // Instant reset when hover ends
        />
      </div>
      <div className="relative z-50 flex w-full justify-between ">
        <div className="relative flex z-50 w-full">
          <PokemonInfo pokemon={pokemon} />
        </div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          className="flex w-full items-center justify-center shadow-cyan-950"
        >
          <motion.div
            animate={{ rotateY: [0, 180, 0] }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          >
            <Image
              src={
                pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
                pokemon?.sprites?.front_default ||
                ""
              }
              width={100}
              height={100}
              className="relative w-[400px] h-[400px]"
              alt={pokemon?.name || "Pokemon Image"}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-fit gap-2 justify-center z-50 items-center bg-black/50 px-4 py-1 rounded-lg">
        <Image src="/pokeball.png" width={50} height={50} alt="pokemon-api" />
        <h1 className="text-md text-gray-50 font-bold uppercase">
          POWERED by : <Link href={"/https://pokeapi.co/"}>Poke Api</Link>
        </h1>
      </div>
    </motion.div>
  );
}
