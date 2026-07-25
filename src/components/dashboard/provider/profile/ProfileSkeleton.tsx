"use client";

export default function ProfileSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">

      <div className="h-10 w-64 rounded bg-muted" />

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="space-y-8">

          <div className="rounded-2xl border bg-card p-6">

            <div className="mx-auto h-28 w-28 rounded-full bg-muted" />

            <div className="mt-6 h-6 rounded bg-muted" />

            <div className="mt-3 h-4 rounded bg-muted" />

          </div>

        </div>

        <div className="rounded-2xl border bg-card p-6 lg:col-span-2">

          <div className="space-y-6">

            <div className="h-10 rounded bg-muted" />
            <div className="h-10 rounded bg-muted" />
            <div className="h-10 rounded bg-muted" />
            <div className="h-10 rounded bg-muted" />

            <div className="h-10 w-40 rounded bg-muted" />

          </div>

        </div>

      </div>

    </div>
  );
}