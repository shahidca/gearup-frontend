"use client";

export default function AdminProfileSkeleton() {
  return (
    <main className="space-y-8 animate-pulse">

      {/* Header */}

      <section>

        <div className="h-10 w-72 rounded bg-muted" />

        <div className="mt-3 h-5 w-96 rounded bg-muted" />

      </section>

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Profile Card */}

        <div className="rounded-3xl border bg-card p-8">

          <div className="mx-auto h-32 w-32 rounded-full bg-muted" />

          <div className="mx-auto mt-6 h-7 w-40 rounded bg-muted" />

          <div className="mx-auto mt-3 h-4 w-56 rounded bg-muted" />

          <div className="mt-10 space-y-6">

            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="space-y-2"
              >
                <div className="h-4 w-24 rounded bg-muted" />

                <div className="h-5 w-full rounded bg-muted" />
              </div>
            ))}

          </div>

        </div>

        {/* Form */}

        <div className="rounded-3xl border bg-card p-8 lg:col-span-2">

          <div className="mb-8 h-8 w-56 rounded bg-muted" />

          <div className="space-y-6">

            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="space-y-2"
              >
                <div className="h-4 w-32 rounded bg-muted" />

                <div className="h-11 w-full rounded bg-muted" />
              </div>
            ))}

            <div className="pt-4">

              <div className="h-11 w-44 rounded bg-muted" />

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}