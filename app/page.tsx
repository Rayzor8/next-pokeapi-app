"use client";

import BoxWhite from "@/components/custom-ui/box-white";
import PokemonList from "@/components/pokemon-list";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col gap-12 items-start p-4">
      <Button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"} Box
      </Button>

      {isVisible && (
        <motion.div
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            transition: {
              duration: 1.2,
            },
          }}
          className="bg-black w-[300px] h-[300px]"
        />
      )}

      <BoxWhite className="flex flex-col gap-4">
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          excepturi amet ullam iure sit cum id ratione aliquid iste velit!
          Labore dignissimos, maxime sed aperiam est eos officiis quidem error,
          et consequuntur voluptatem rerum eveniet commodi ad. Quam, ratione
          illum perspiciatis maxime officia quis et molestias ab commodi eos a
          eius expedita nobis nostrum ducimus quibusdam esse, accusamus quaerat
          adipisci temporibus voluptatem. Saepe delectus pariatur eos maxime
          quod laboriosam dolore, unde tenetur sequi ut asperiores placeat est
          itaque consequuntur dolores, praesentium, soluta beatae nostrum
          officiis quos. Inventore, voluptatibus illum possimus consequuntur
          placeat quo, suscipit doloribus quia ipsum eaque libero unde!
          Accusamus aliquam, dolore incidunt aperiam quod ut obcaecati facere
          nisi, reiciendis rerum facilis saepe beatae tempora modi quasi
          laudantium. Nesciunt corrupti harum fugit odio, quasi optio rem
          voluptas quidem dolore, maiores ipsa distinctio dolores. Suscipit
          nobis, laboriosam quo eveniet quas aperiam, consequuntur unde
          assumenda repellendus perspiciatis vel adipisci dignissimos, quam enim
          blanditiis repudiandae optio voluptates maiores recusandae! Incidunt
          quam architecto harum esse expedita placeat perspiciatis? Autem
          perferendis odit voluptatibus corrupti qui reprehenderit, officia
          illum aliquam laudantium accusamus natus quisquam consectetur atque
          inventore voluptatum, quasi esse laboriosam. At numquam eaque amet
          inventore cupiditate quasi beatae quia tempora! Ea error ratione nam!
        </p>

        <PokemonList />
      </BoxWhite>
    </div>
  );
}
