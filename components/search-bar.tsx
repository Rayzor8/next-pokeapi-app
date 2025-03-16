"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize query from URL if coming from search page
  useEffect(() => {
    const urlQuery = searchParams.get("q");
    if (urlQuery) {
      setQuery(urlQuery);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(
        `/search?q=${encodeURIComponent(query.toLowerCase())}&page=1`
      );
    }
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <Input
        type="text"
        placeholder="Search for a Pokémon..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="pl-4 pr-24 py-6 rounded-full border-2 bg-slate-200 border-yellow-400 focus-visible:ring-yellow-400 shadow-lg text-black  dark:text-white"
      />
      {query && (
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={clearSearch}
          className="absolute right-12 top-1 h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X className="h-5 w-5 text-gray-500" />
          <span className="sr-only">Clear search</span>
        </Button>
      )}
      <Button
        type="submit"
        size="icon"
        className="absolute right-1 top-1 h-10 w-10 rounded-full bg-yellow-400 hover:bg-yellow-500"
      >
        <Search className="h-5 w-5 text-gray-800" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
}
