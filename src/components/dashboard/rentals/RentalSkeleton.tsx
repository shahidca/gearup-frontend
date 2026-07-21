"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function RentalSkeleton() {
  return (
    <div className="rounded-3xl border p-6">

      <Skeleton className="h-44 w-full rounded-2xl" />

      <Skeleton className="mt-6 h-6 w-2/3" />

      <Skeleton className="mt-3 h-4 w-full" />

      <Skeleton className="mt-3 h-4 w-1/2" />

      <Skeleton className="mt-8 h-10 w-full rounded-xl" />

    </div>
  );
}