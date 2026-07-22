"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function RentalSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-64" />

      <div className="rounded-xl border p-6">
        <div className="space-y-4">
          {Array.from({ length: 8 }).map(
            (_, index) => (
              <Skeleton
                key={index}
                className="h-12 w-full"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}