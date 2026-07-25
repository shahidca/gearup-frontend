"use client";

export default function CustomerRentalSkeleton() {
  return (
    <main className="space-y-8 animate-pulse">

      <div className="space-y-3">
        <div className="h-8 w-56 rounded bg-muted" />
        <div className="h-4 w-80 rounded bg-muted" />
      </div>

      <div className="flex justify-between">

        <div className="h-10 w-72 rounded bg-muted" />

        <div className="h-10 w-40 rounded bg-muted" />

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {Array.from({
          length: 6,
        }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-card p-6"
          >
            <div className="space-y-5">

              <div className="h-40 rounded-xl bg-muted" />

              <div className="h-5 w-40 rounded bg-muted" />

              <div className="h-4 w-56 rounded bg-muted" />

              <div className="h-10 rounded bg-muted" />

            </div>
          </div>
        ))}

      </div>

    </main>
  );
}