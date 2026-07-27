"use client";

export default function CustomerRentalSkeleton() {
  return (
    <main className="space-y-8 animate-pulse">
      {/* Header */}

      <section className="space-y-3">
        <div className="h-8 w-56 rounded bg-muted" />

        <div className="h-4 w-80 max-w-full rounded bg-muted" />
      </section>

      {/* Filters */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="h-10 w-full max-w-sm rounded bg-muted" />

        <div className="h-10 w-[220px] rounded bg-muted" />
      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border bg-card"
          >
            <div className="h-56 bg-muted" />

            <div className="space-y-5 p-5">
              <div className="flex items-center justify-between">
                <div className="h-6 w-40 rounded bg-muted" />

                <div className="h-6 w-24 rounded-full bg-muted" />
              </div>

              <div className="space-y-3">
                <div className="h-4 w-48 rounded bg-muted" />

                <div className="h-4 w-36 rounded bg-muted" />

                <div className="h-4 w-32 rounded bg-muted" />

                <div className="h-4 w-28 rounded bg-muted" />

                <div className="h-6 w-24 rounded-full bg-muted" />
              </div>

              <div className="h-10 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}