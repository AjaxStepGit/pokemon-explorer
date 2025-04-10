export default function Abilities({ pokemon }: { pokemon: any }) {
  return (
    <div className="space-y-4">
      {pokemon.abilities.map((ability: any) => (
        <div
          key={ability.ability.name}
          className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
        >
          <h3 className="font-medium capitalize mb-1">
            {ability.ability.name.replace("-", " ")}
            {ability.is_hidden && (
              <span className="ml-2 text-xs text-gray-500">(Hidden)</span>
            )}
          </h3>
        </div>
      ))}
    </div>
  );
}
