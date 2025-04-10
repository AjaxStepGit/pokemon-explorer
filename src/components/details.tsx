import Abilities from "./abilities";
import AboutSection from "./about";
import MovesSection from "./moves";
import StatsSection from "./stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Details({ pokemon }: { pokemon: any }) {
  return (
    <div className="flex h-full w-full p-4">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger value="account">About</TabsTrigger>
          <TabsTrigger value="password">Statistics</TabsTrigger>
          <TabsTrigger value="moves">Moves</TabsTrigger>
          <TabsTrigger value="ability">Abilities</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AboutSection pokemon={pokemon} />
        </TabsContent>
        <TabsContent value="password">
          <StatsSection pokemon={pokemon} />
        </TabsContent>
        <TabsContent value="moves">
          <MovesSection pokemon={pokemon} />
        </TabsContent>
        <TabsContent value="ability">
          <Abilities pokemon={pokemon} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
