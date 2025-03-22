import { colors } from "@/lib/const";

export function PokemonBadge({ type }: { type: string }) {
  const getTypeColor = (type: string) => {
    return colors[type] || "bg-gray-400";
  };

  return (
    <span
      className={`${getTypeColor(
        type
      )} text-white text-xs px-2 py-1 rounded-full capitalize`}
    >
      {type}
    </span>
  );
}
