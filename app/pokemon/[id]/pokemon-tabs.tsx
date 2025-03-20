import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PokemonDetails } from "@/types";
import React from "react";

type PokemonTabsProps = {
  pokemon: PokemonDetails;
  getTypeColor: (type: string) => string;
};

export default function PokemonTabs({
  pokemon,
  getTypeColor,
}: PokemonTabsProps) {
  const formatStatName = (stat: string) => {
    switch (stat) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
      default:
        return stat;
    }
  };

  return (
    <Tabs defaultValue="about">
      <TabsList className="w-full mb-4 dark:bg-gray-700">
        <TabsTrigger value="about" className="flex-1">
          About
        </TabsTrigger>
        <TabsTrigger value="stats" className="flex-1 cursor-pointer">
          Stats
        </TabsTrigger>
        <TabsTrigger value="abilities" className="flex-1 cursor-pointer">
          Abilities
        </TabsTrigger>
      </TabsList>

      <TabsContent value="about" className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Height
            </h3>
            <p className="text-lg dark:text-white">
              {(pokemon.height / 10).toFixed(1)} m
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Weight
            </h3>
            <p className="text-lg dark:text-white">
              {(pokemon.weight / 10).toFixed(1)} kg
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Type
          </h3>
          <div className="flex gap-2">
            {pokemon.types?.map((type) => (
              <Badge
                key={type.type.name}
                className={`${getTypeColor(
                  type.type.name
                )} text-white capitalize px-3 py-1`}
              >
                {type.type.name}
              </Badge>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="stats" className="space-y-4">
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name} className="space-y-1">
            <div className="flex justify-between">
              <span className="text-sm font-medium dark:text-white">
                {formatStatName(stat.stat.name)}
              </span>
              <span className="text-sm font-medium dark:text-white">
                {stat.base_stat}
              </span>
            </div>
            <Progress value={stat.base_stat} max={255} className="h-2" />
          </div>
        ))}
      </TabsContent>

      <TabsContent value="abilities" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Abilities
          </h3>
          <ul className="space-y-2">
            {pokemon.abilities.map((ability) => (
              <li
                key={ability.ability.name}
                className="capitalize bg-gray-100 dark:bg-gray-700 p-3 rounded-md dark:text-white"
              >
                {ability.ability.name.replace("-", " ")}
              </li>
            ))}
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
