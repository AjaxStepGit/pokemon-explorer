export default function AboutSection({ pokemon }: { pokemon: any }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Height
        </h3>
        <p>{pokemon.height / 10} m</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Weight
        </h3>
        <p>{pokemon.weight / 10} kg</p>
      </div>
      <div className="col-span-2">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Species
        </h3>
        <p className="capitalize">{pokemon.species.name}</p>
      </div>
    </div>
  );
}
