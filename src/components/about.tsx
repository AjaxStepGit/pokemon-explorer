import * as motion from "motion/react-client";

function Detail({ label, info }: { label: string; info: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-white font-bold capitalize">{label}</span>
      <h2 className="text-md text-white font-semibold capitalize">{info}</h2>
    </div>
  );
}

export default function AboutSection({ pokemon }: { pokemon: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="flex  w-full min-w-3xl flex-col gap-4 p-4"
    >
      <h1 className="text-xl font-bold uppercase mt-2 text-white text-shadow-lg">
        {pokemon?.species?.name}
      </h1>
      <div className="flex justify-between">
        <Detail label="height" info={`${String(pokemon.height / 10)} ft`} />
        <Detail label="weight" info={`${String(pokemon.weight / 10)} kg`} />
      </div>
    </motion.div>
  );
}
