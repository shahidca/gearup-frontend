"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function ProviderOrdersSkeleton() {
  return (
    <main className="space-y-8">

      {/* Header */}

      <section className="space-y-3">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-5 w-96" />
      </section>

      {/* Cards */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-card p-5 shadow-sm"
          >
            <div className="space-y-5">

              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-36" />
                  <Skeleton className="h-4 w-48" />
                </div>

                <Skeleton className="h-7 w-24 rounded-full" />
              </div>

              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />

              <div className="flex justify-between pt-2">
                <Skeleton className="h-10 w-28" />
                <Skeleton className="h-10 w-28" />
              </div>

            </div>
          </div>
        ))}

      </section>

    </main>
  );
}