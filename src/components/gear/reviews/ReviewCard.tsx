"use client";

import { Star } from "lucide-react";

import type { Review } from "@/services/gear.service";

interface Props {
  review: Review;
}

export default function ReviewCard({
  review,
}: Props) {
  return (
    <div className="rounded-2xl border bg-background p-6">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="font-semibold">
            {review.customer.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {new Date(
              review.createdAt
            ).toLocaleDateString()}
          </p>
        </div>

        <div className="flex items-center gap-1">

          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}

        </div>

      </div>

      <p className="mt-5 leading-7 text-muted-foreground">
        {review.comment}
      </p>

    </div>
  );
}