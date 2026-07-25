export default function EmptyGearState() {
  return (
    <div className="rounded-2xl border bg-card py-20 text-center">
      <h2 className="text-xl font-semibold">
        No Gear Found
      </h2>

      <p className="mt-2 text-muted-foreground">
        No gear matches your search.
      </p>
    </div>
  );
}