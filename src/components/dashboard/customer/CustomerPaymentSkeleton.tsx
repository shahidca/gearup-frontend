"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function CustomerPaymentSkeleton() {
  return (
    <main className="space-y-8">

      <div className="space-y-3">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="h-5 w-96" />
      </div>

      <Skeleton className="h-24 w-full rounded-2xl" />

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="space-y-4 rounded-2xl border p-6"
          >
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        ))}

      </section>

    </main>
  );
}