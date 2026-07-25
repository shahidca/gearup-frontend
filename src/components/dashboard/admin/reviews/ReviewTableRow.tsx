"use client";

import { format } from "date-fns";



import {
  Star,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import DeleteReviewDialog from "./DeleteReviewDialog";
import { TReview } from "@/types/review";



interface ReviewTableRowProps {
  review: TReview;
}

export default function ReviewTableRow({
  review,
}: ReviewTableRowProps) {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <tr className="border-b hover:bg-muted/40 transition-colors">

        {/* Customer */}

        <td className="px-4 py-4">

          <div>

            <p className="font-medium">
              {review.user.name}
            </p>

            <p className="text-sm text-muted-foreground">
              {review.user.email}
            </p>

          </div>

        </td>

        {/* Gear */}

        <td className="px-4 py-4">

          <div className="flex items-center gap-3">

            {review.gearItem.images?.[0] && (
              <img
                src={review.gearItem.images[0]}
                alt={review.gearItem.name}
                className="h-10 w-10 rounded-lg object-cover"
              />
            )}

            <span className="font-medium">
              {review.gearItem.name}
            </span>

          </div>

        </td>

        {/* Rating */}

        <td className="px-4 py-4">

          <div className="flex items-center gap-1">

            {Array.from({
              length: review.rating,
            }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}

          </div>

        </td>

        {/* Review */}

        <td className="max-w-xs px-4 py-4">

          <p className="truncate">
            {review.comment}
          </p>

        </td>

        {/* Date */}

        <td className="px-4 py-4">

          {format(
            new Date(
              review.createdAt
            ),
            "dd MMM yyyy"
          )}

        </td>

        {/* Action */}

        <td className="px-4 py-4 text-right">

          <Button
            size="icon"
            variant="destructive"
            onClick={() =>
              setOpen(true)
            }
          >
            <Trash2 className="h-4 w-4" />
          </Button>

        </td>

      </tr>

      <DeleteReviewDialog
        open={open}
        onOpenChange={setOpen}
        reviewId={review.id}
      />
    </>
  );
}