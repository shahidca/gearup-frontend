export default function CategorySkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-border p-6">
      <div className="h-16 w-16 rounded-2xl bg-muted" />

      <div className="mt-6 h-6 w-40 rounded bg-muted" />

      <div className="mt-4 h-4 w-full rounded bg-muted" />

      <div className="mt-2 h-4 w-2/3 rounded bg-muted" />

      <div className="mt-6 h-5 w-24 rounded bg-muted" />
    </div>
  );
}