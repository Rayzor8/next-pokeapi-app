import { cn } from "@/lib/utils";
import React from "react";

type BoxWhiteProps = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;
export default function BoxWhite({
  children,
  className,
  ...rest
}: BoxWhiteProps) {
  return (
    <div
      className={cn(
        "bg-gray-50 dark:bg-gray-800 shadow-md rounded-md p-6 dark:text-white animate-fade-in ",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
