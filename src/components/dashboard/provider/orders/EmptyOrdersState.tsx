"use client";

import { PackageSearch } from "lucide-react";

export default function EmptyOrdersState() {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="rounded-2xl border border-dashed bg-card p-10 text-center shadow-sm">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <PackageSearch className="h-10 w-10 text-primary" />
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          No Orders Found
        </h2>

        <p className="mt-2 max-w-md text-muted-foreground">
          You haven't received any rental orders yet.
          When customers rent your gear, their
          orders will appear here.
        </p>

      </div>
    </div>
  );
}