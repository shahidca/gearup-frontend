"use client";

export default function CustomerDashboardSkeleton() {
  return (
    <main className="space-y-8 animate-pulse">
      {/* Header */}

      <section className="space-y-3">
        <div className="h-9 w-72 rounded bg-muted" />

        <div className="h-5 w-96 max-w-full rounded bg-muted" />
      </section>

      {/* Statistics */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-card p-6"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <div className="h-4 w-24 rounded bg-muted" />

                <div className="h-8 w-20 rounded bg-muted" />
              </div>

              <div className="h-14 w-14 rounded-2xl bg-muted" />
            </div>
          </div>
        ))}
      </section>

      {/* Recent Rentals */}

      <section className="rounded-2xl border bg-card p-6">
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-3">
            <div className="h-6 w-48 rounded bg-muted" />

            <div className="h-4 w-64 max-w-full rounded bg-muted" />
          </div>

          <div className="h-10 w-28 rounded bg-muted" />
        </div>

        <div className="space-y-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border p-5"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted" />

                  <div className="space-y-3">
                    <div className="h-5 w-48 rounded bg-muted" />

                    <div className="h-4 w-32 rounded bg-muted" />

                    <div className="h-4 w-56 rounded bg-muted" />
                  </div>
                </div>

                {/* Right */}

                <div className="space-y-3 lg:text-right">
                  <div className="flex gap-2 lg:justify-end">
                    <div className="h-6 w-20 rounded-full bg-muted" />

                    <div className="h-6 w-24 rounded-full bg-muted" />
                  </div>

                  <div className="h-4 w-36 rounded bg-muted lg:ml-auto" />

                  <div className="h-5 w-28 rounded bg-muted lg:ml-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}