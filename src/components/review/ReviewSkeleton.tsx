"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ReviewSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border">

      <Skeleton className="h-56 w-full" />

      <div className="space-y-4 p-5">

        <Skeleton className="h-6 w-2/3" />

        <Skeleton className="h-4 w-1/3" />

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-4 w-5/6" />

      </div>

    </div>
  );
}