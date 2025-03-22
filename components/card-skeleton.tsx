import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Card, CardContent } from "./ui/card";

type CardSkeletonProps = {
  limit: number;
};

export const CardSkeleton = ({ limit }: CardSkeletonProps) => {
  return (
    <div>
      <div className="flex justify-end mb-6">
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(limit)
          .fill(0)
          .map((_, index) => (
            <Card key={index} className="overflow-hidden bg-gray-200 dark:bg-gray-700">
              <CardContent className="p-0">
                <div className="p-6 flex flex-col items-center">
                  <Skeleton className="h-40 w-40 rounded-md mb-4" />
                  <Skeleton className="h-4 w-28 rounded-md mb-4" />
                  <Skeleton className="h-4 w-26 rounded-md mb-4" />
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};
