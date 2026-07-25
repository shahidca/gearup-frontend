"use client";

export default function ProviderDashboardSkeleton() {
  return (
    <main className="space-y-8 animate-pulse">

      {/* ================= Header ================= */}

      <div className="space-y-3">

        <div className="h-9 w-64 rounded bg-muted" />

        <div className="h-5 w-80 rounded bg-muted" />

      </div>

      {/* ================= Stats ================= */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-card p-6"
          >
            <div className="space-y-4">

              <div className="h-4 w-28 rounded bg-muted" />

              <div className="h-9 w-20 rounded bg-muted" />

            </div>
          </div>
        ))}

      </section>

      {/* ================= Recent Orders ================= */}

      <section className="rounded-2xl border bg-card p-6">

        <div className="mb-6 h-6 w-48 rounded bg-muted" />

        <div className="space-y-4">

          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border p-5"
            >
              <div className="space-y-3">

                <div className="h-5 w-40 rounded bg-muted" />

                <div className="h-4 w-64 rounded bg-muted" />

              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}