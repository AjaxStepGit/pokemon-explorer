import * as motion from "motion/react-client";

function Detail({ label, info }: { label: string; info: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs text-white font-bold capitalize">{label}</span>
      <h2 className="text-md text-white font-semibold capitalize">{info}</h2>
    </div>
  );
}

export default function Abilities({ pokemon }: { pokemon: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1, ease: "anticipate" }}
      className="flex min-w-3xl gap-2 p-3"
    >
      {pokemon.abilities.map((ability: any) => (
        <div
          key={ability.ability.name}
          className="flex text-md text-white h-fit w-full justify-between"
        >
          <Detail
            label={ability?.is_hidden ? "Hidden" : "Ability"}
            info={ability.ability.name.replace("-", " ")}
          />
        </div>
      ))}
    </motion.div>
  );
}
