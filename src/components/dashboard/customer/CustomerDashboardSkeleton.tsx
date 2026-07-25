"use client";

export default function CustomerDashboardSkeleton() {
  return (
    <main className="space-y-8 animate-pulse">

      {/* Header */}

      <section className="space-y-3">

        <div className="h-9 w-72 rounded bg-muted" />

        <div className="h-5 w-96 rounded bg-muted" />

      </section>

      {/* Stat Cards */}

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

              <div className="h-14 w-14 rounded-xl bg-muted" />

            </div>
          </div>
        ))}

      </section>

      {/* Recent Rentals */}

      <section className="rounded-2xl border bg-card p-6">

        <div className="mb-8 flex items-center justify-between">

          <div className="space-y-3">

            <div className="h-6 w-48 rounded bg-muted" />

            <div className="h-4 w-64 rounded bg-muted" />

          </div>

          <div className="h-10 w-28 rounded bg-muted" />

        </div>

        <div className="space-y-5">

          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border p-5"
            >
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-full bg-muted" />

                  <div className="space-y-3">

                    <div className="h-5 w-48 rounded bg-muted" />

                    <div className="h-4 w-32 rounded bg-muted" />

                  </div>

                </div>

                <div className="space-y-3">

                  <div className="h-5 w-20 rounded bg-muted" />

                  <div className="h-5 w-28 rounded bg-muted" />

                </div>

              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}