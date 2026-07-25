export default function AdminDashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">

      <div className="h-10 w-72 rounded bg-muted" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-36 rounded-2xl bg-muted"
          />
        ))}

      </div>

      <div className="h-96 rounded-2xl bg-muted" />

    </div>
  );
}