import { Users } from "lucide-react";

export default function EmptyUsers() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border py-20">
      <Users className="mb-4 h-16 w-16 text-muted-foreground" />

      <h2 className="text-2xl font-bold">
        No Users Found
      </h2>

      <p className="mt-2 text-muted-foreground">
        Try changing your search or filters.
      </p>
    </div>
  );
}