"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePokemonBySearch } from "@/hooks/usePokemon";
import BoxWhite from "@/components/custom-ui/box-white";
import { Pagination } from "@/components/pagination";
import { CardSkeleton } from "@/components/card-skeleton";
import { PokemonCard } from "@/components/pokemon-card";
import { motionVariant } from "@/lib/const/motion-variant";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const pageParam = searchParams.get("page") || "1";
  const page = Number.parseInt(pageParam, 10);
  const limit = 12;

  const { results, loading, totalPages, totalResults } = usePokemonBySearch(
    query,
    page,
    limit
  );

  const handlePrevPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      router.push(`/search?q=${encodeURIComponent(query)}&page=${newPage}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      const newPage = page + 1;
      router.push(`/search?q=${encodeURIComponent(query)}&page=${newPage}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return <BoxWhite>{<CardSkeleton limit={limit} />}</BoxWhite>;
  }

  return (
    <BoxWhite>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Search Results for <q>{query}</q>
        </h1>
      </div>

      {totalResults > 0 && (
        <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Found {totalResults} Pokémon matching <q>{query}</q>
          {totalPages > 1 && (
            <span>
              {" "}
              - Page {page} of {totalPages}
            </span>
          )}
        </div>
      )}

      {results.length > 0 ? (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={motionVariant.container}
            initial="hidden"
            animate="show"
          >
            {results.map((pokemon) => (
              <motion.div key={pokemon.id} variants={motionVariant.item}>
                <PokemonCard pokemon={pokemon} />
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPrevPage={handlePrevPage}
              onNextPage={handleNextPage}
              className="mt-8"
            />
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            No Pokémon found matching <q>{query}</q>
          </p>
          <Link href="/" className="mt-4 inline-block">
            <Button>Return to Home</Button>
          </Link>
        </div>
      )}
    </BoxWhite>
  );
}
