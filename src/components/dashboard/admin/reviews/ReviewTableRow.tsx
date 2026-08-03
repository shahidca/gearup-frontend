"use client";

import { TReview } from "@/types/review";
import { Star } from "lucide-react";

interface ReviewTableRowProps {
  review: TReview;
}

export default function ReviewTableRow({ review }: ReviewTableRowProps) {
  const userName =
    review.customer?.name ??
    review.user?.name ??
    "Anonymous";

  const userEmail =
    review.customer?.email ??
    review.user?.email ??
    "N/A";

  const gearName =
    review.gearItem?.name ??
    review.gear?.name ??
    "Gear Item";

  return (
    <tr className="border-b transition-colors hover:bg-muted/50">
      <td className="px-4 py-3">
        <div>
          <p className="font-medium">{userName}</p>
          <p className="text-sm text-muted-foreground">{userEmail}</p>
        </div>
      </td>
      <td className="px-4 py-3 text-sm font-medium">{gearName}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-semibold">{review.rating ?? 0}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-sm text-muted-foreground max-w-xs truncate">
        {review.comment || "No comment provided."}
      </td>
      <td className="px-4 py-3 text-sm text-muted-foreground">
        {review.createdAt
          ? new Date(review.createdAt).toLocaleDateString()
          : "N/A"}
      </td>
      <td className="px-4 py-3 text-right"></td>
    </tr>
  );
}