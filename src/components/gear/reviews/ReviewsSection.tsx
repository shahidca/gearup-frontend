"use client";

import type { Gear } from "@/services/gear.service";

import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

interface Props {
  gear: Gear;
}

export default function ReviewsSection({
  gear,
}: Props) {
  return (
    <section className="mt-12 rounded-3xl border bg-card p-8 shadow-sm">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          Reviews
        </h2>

        <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          {gear.reviews.length} Reviews
        </span>

      </div>

      <ReviewForm gear={gear} />

      <div className="mt-10 space-y-6">

        {gear.reviews.length === 0 ? (
          <div className="rounded-xl border border-dashed py-12 text-center text-muted-foreground">
            No reviews yet.
          </div>
        ) : (
          gear.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))
        )}

      </div>

    </section>
  );
}