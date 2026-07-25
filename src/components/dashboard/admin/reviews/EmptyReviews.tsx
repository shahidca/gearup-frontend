"use client";

import { MessageSquare } from "lucide-react";

export default function EmptyReviews() {
  return (
    <div className="rounded-2xl border border-dashed py-24">

      <div className="mx-auto flex max-w-sm flex-col items-center text-center">

        <MessageSquare className="mb-4 h-14 w-14 text-muted-foreground" />

        <h3 className="text-xl font-semibold">
          No Reviews Found
        </h3>

        <p className="mt-2 text-muted-foreground">
          There are currently no reviews to
          display.
        </p>

      </div>

    </div>
  );
}