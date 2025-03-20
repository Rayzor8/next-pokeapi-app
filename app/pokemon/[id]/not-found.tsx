import BoxWhite from "@/components/custom-ui/box-white";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <BoxWhite>
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Pokemon Not Found
      </h1>
      <p className="mb-4 dark:text-gray-300">
        Sorry, we couldn`t find the Pokémon you`re looking for.
      </p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </BoxWhite>
  );
}
