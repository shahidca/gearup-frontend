"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProviderGearSkeleton() {
  return (
    <div className="space-y-8">

      {/* ================= Header ================= */}

      <div className="space-y-3">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* ================= Filters ================= */}

      <div className="rounded-2xl border bg-card p-6">

        <div className="grid gap-4 lg:grid-cols-4">

          <Skeleton className="h-10 lg:col-span-2" />

          <Skeleton className="h-10" />

          <Skeleton className="h-10" />

        </div>

        <div className="mt-6 flex justify-end">
          <Skeleton className="h-10 w-40" />
        </div>

      </div>

      {/* ================= Table ================= */}

      <div className="rounded-2xl border bg-card p-6">

        <div className="space-y-4">

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-7 gap-4"
            >
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}