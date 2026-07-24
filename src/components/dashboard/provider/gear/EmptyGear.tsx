export default function EmptyGear() {
  return (
    <div className="rounded-xl border border-dashed p-12 text-center">
      <h3 className="text-xl font-semibold">
        No Gear Found
      </h3>

      <p className="mt-2 text-muted-foreground">
        You haven't added any gear yet.
      </p>
    </div>
  );
}