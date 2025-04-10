import { Progress } from "./ui/progress";

export default function StatsSection({ pokemon }: { pokemon: any }) {
  return (
    <div className="space-y-4">
      {pokemon.stats.map((stat: any) => (
        <div key={stat.stat.name} className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm font-medium capitalize">
              {stat.stat.name.replace("-", " ")}
            </p>
            <span className="text-sm font-medium">{stat.base_stat}</span>
          </div>
          <Progress value={stat.base_stat} max={255} className="h-2" />
        </div>
      ))}
    </div>
  );
}
