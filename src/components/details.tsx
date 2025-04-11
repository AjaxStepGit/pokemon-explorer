import Abilities from "./abilities";
import AboutSection from "./about";
import MovesSection from "./moves";
import StatsSection from "./stats";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function PokemonInfo({ pokemon }: { pokemon: any }) {
  return (
    <div className="relative flex w-full p-4 z-50 overflow-hidden">
      {/* Trapezoid Background Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none" />
      {/* Content Layer */}
      <div className="relative z-20 w-full h-[400px]">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="flex bg-transparent gap-6 h-[60px]">
            <TabsTrigger
              value="about"
              className="text-xl text-white text-shadow-xl transition-all duration-500 bg-transparent data-[state=active]:text-5xl data-[state=active]:bg-transparent flex items-end"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className="text-xl text-white text-shadow-xl transition-all duration-500 bg-transparent data-[state=active]:text-5xl data-[state=active]:bg-transparent flex items-end"
            >
              Statistics
            </TabsTrigger>
            <TabsTrigger
              value="moves"
              className="text-xl text-white text-shadow-xl transition-all duration-500 bg-transparent data-[state=active]:text-5xl data-[state=active]:bg-transparent flex items-end"
            >
              Moves
            </TabsTrigger>
            <TabsTrigger
              value="abilities"
              className="text-xl text-white text-shadow-xl transition-all duration-500 bg-transparent data-[state=active]:text-5xl data-[state=active]:bg-transparent flex items-end"
            >
              Abilities
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <AboutSection pokemon={pokemon} key={"about-section"} />
          </TabsContent>
          <TabsContent value="stats">
            <StatsSection pokemon={pokemon} />
          </TabsContent>
          <TabsContent value="moves">
            <MovesSection pokemon={pokemon} key={"pokemon-section"} />
          </TabsContent>
          <TabsContent value="abilities">
            <Abilities pokemon={pokemon} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
