import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Pokemon } from "@/types";
import { PokemonBadge } from "./pokemon-badge";

interface PokemonCardProps {
  pokemon: Pokemon;
  priority?: boolean;
}

export function PokemonCard({ pokemon, priority = false }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 cursor-pointer bg-gray-100 dark:bg-gray-700">
        <CardContent className="p-0">
          <div className=" p-6 flex flex-col items-center ">
            <div className="relative h-40 w-40">
              <Image
                src={pokemon.image || "/placeholder.svg"}
                alt={pokemon.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain hover:scale-110 transition-transform duration-300"
                priority={priority}
              />
            </div>
            <h3 className="mt-4 text-lg font-medium capitalize text-gray-800 dark:text-white">
              {pokemon.name}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              #{pokemon.id.toString().padStart(3, "0")}
            </span>

            {pokemon.types && (
              <div className="flex gap-2 mt-2">
                {pokemon.types.map((type) => (
                  <PokemonBadge key={type.type.name} type={type.type.name} />
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
