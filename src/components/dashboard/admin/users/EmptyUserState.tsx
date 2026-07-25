export default function EmptyUserState() {
  return (
    <div className="rounded-2xl border bg-card py-20 text-center">

      <h2 className="text-xl font-semibold">
        No Users Found
      </h2>

      <p className="mt-2 text-muted-foreground">
        Try changing your search or filters.
      </p>

    </div>
  );
}