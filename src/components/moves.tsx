import { Badge } from "./ui/badge";

export default function MovesSection({ pokemon }: { pokemon: any }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
      {pokemon.moves.slice(0, 20).map((move: any) => (
        <Badge key={move.move.name} variant="outline" className="capitalize">
          {move.move.name.replace("-", " ")}
        </Badge>
      ))}
      {pokemon.moves.length > 20 && (
        <p className="col-span-full text-sm text-gray-500 dark:text-gray-400 mt-2">
          + {pokemon.moves.length - 20} more moves
        </p>
      )}
    </div>
  );
}
