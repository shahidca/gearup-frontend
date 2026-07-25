"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ReviewSkeleton() {
  return (
    <div className="space-y-6">

      <Skeleton className="h-10 w-72" />

      <div className="rounded-xl border p-6 space-y-4">

        {Array.from({
          length: 8,
        }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-12 w-full"
          />
        ))}

      </div>

    </div>
  );
}