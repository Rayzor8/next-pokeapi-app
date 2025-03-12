"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
    </div>
  );
}
