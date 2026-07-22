export default function EmptyGear() {
  return (
    <div className="rounded-xl border p-10 text-center">
      <h2 className="text-xl font-semibold">
        No Gear Found
      </h2>

      <p className="mt-2 text-muted-foreground">
        There are no gear items available.
      </p>
    </div>
  );
}