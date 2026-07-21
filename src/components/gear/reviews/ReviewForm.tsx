"use client";

import { Button } from "@/components/ui/button";
import type { Gear } from "@/services/gear.service";

interface Props {
  gear: Gear;
}

export default function ReviewForm({
  gear,
}: Props) {
  return (
    <div className="mb-8 rounded-2xl border border-dashed p-6">

      <h3 className="text-lg font-semibold">
        Leave a Review
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Reviews can be submitted after completing a rental.
      </p>

      <Button
        disabled
        className="mt-5"
      >
        Write Review
      </Button>

    </div>
  );
}