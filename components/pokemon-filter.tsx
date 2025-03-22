"use client";

import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/lib/const";
import { PokemonType } from "@/enums";

const pokemonTypes = [
  "all",
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

interface TypeFilterProps {
  selectedType: PokemonType;
  onTypeChange: (type: PokemonType) => void;
}

export function TypeFilter({ selectedType, onTypeChange }: TypeFilterProps) {
  const getTypeColor = (type: PokemonType) => {
    if (type === PokemonType.ALL) return "bg-gray-500 dark:bg-gray-600";

    return colors[type] || "bg-gray-400";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 bg-white dark:bg-gray-800"
        >
          <span>Filter by Type:</span>
          <Badge
            className={`${getTypeColor(
              selectedType
            )} text-white capitalize px-2 py-0`}
          >
            {selectedType}
          </Badge>
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pokémon Types</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-y-auto">
          {pokemonTypes.map((type) => (
            <DropdownMenuItem
              key={type}
              className="flex items-center justify-between cursor-pointer"
              onClick={() => onTypeChange(type as PokemonType)}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${getTypeColor(
                    type as PokemonType
                  )}`}
                />
                <span className="capitalize">{type}</span>
              </div>
              {selectedType === type && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
