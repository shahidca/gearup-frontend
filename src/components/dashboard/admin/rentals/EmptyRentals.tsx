"use client";

import { PackageSearch } from "lucide-react";

export default function EmptyRentals() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed py-16">
      <PackageSearch className="mb-4 h-14 w-14 text-muted-foreground" />

      <h2 className="text-xl font-semibold">
        No Rentals Found
      </h2>

      <p className="mt-2 text-center text-muted-foreground">
        There are no rental orders matching your search or filters.
      </p>
    </div>
  );
}