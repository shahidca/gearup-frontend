"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import RatingStars from "./RatingStars";

import { TReview } from "@/types/review";

interface ReviewCardProps {
  review: TReview;
}

export default function ReviewCard({
  review,
}: ReviewCardProps) {
  return (
    <Card className="overflow-hidden">

      <div className="relative h-56">
        <Image
          src={
            review.gearItem?.images?.[0] ??
            "https://placehold.co/600x400"
          }
          alt={review.gearItem?.name ?? "Gear"}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">

        <div>

          <h2 className="text-xl font-bold">
            {review.gearItem?.name}
          </h2>

          <p className="text-sm text-muted-foreground">
            {review.gearItem?.category?.name}
          </p>

        </div>

        <RatingStars
          rating={review.rating}
        />

        {review.comment && (
          <p className="text-sm leading-6 text-muted-foreground">
            {review.comment}
          </p>
        )}

        <div className="text-xs text-muted-foreground">
          {new Date(
            review.createdAt
          ).toLocaleDateString()}
        </div>

      </div>

    </Card>
  );
}