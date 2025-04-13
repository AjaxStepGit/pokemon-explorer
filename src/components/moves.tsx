import { Badge } from "./ui/badge";
import * as motion from "motion/react-client";

export default function MovesSection({ pokemon }: { pokemon: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="flex gap-3 w-full min-w-3xl mt-4 "
    >
      <div className="flex gap-3 flex-wrap h-fit items-center">
        {pokemon.moves.slice(0, 50).map((move: any) => (
          <Badge
            key={move?.move?.name?.replace("-", " ")}
            className="backdrop-blur-lg text-sm inset-0 h-[34px] bg-transparent bg-cover py-1 px-3 text-white border-2 border-white"
          >
            {move?.move?.name?.replace("-", " ")}
          </Badge>
        ))}

        {pokemon.moves.length > 50 && (
          <p className="text-sm text-gray-50 font-semibold">
            +{pokemon.moves.length - 50} more rows
          </p>
        )}
      </div>
    </motion.div>
  );
}
