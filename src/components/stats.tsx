import * as motion from "motion/react-client";
import { Progress } from "./ui/progress";

function Detail({ label, info }: { label: string; info: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-white font-bold capitalize">{label}</span>
      <h2 className="text-xl text-white font-semibold capitalize">{info}</h2>
    </div>
  );
}

export default function StatsSection({ pokemon }: { pokemon: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="flex flex-col gap-3 w-full min-w-3xl p-3"
    >
      {pokemon.stats.map((stat: any) => (
        <div key={stat.stat.name} className="flex gap-3 items-center">
          <h1 className="text-sm text-white font-bold uppercase min-w-48">
            {stat?.stat?.name}
          </h1>
          <Progress
            className="text-white bg-white border border-black"
            value={parseInt(stat?.base_stat)}
          />
          <h1 className="text-lg text-white font-bold ml-8">
            {stat?.base_stat}
          </h1>
        </div>
      ))}
    </motion.div>
  );
}
