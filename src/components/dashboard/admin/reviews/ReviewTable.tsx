"use client";

import { TReview } from "@/types/review";
import ReviewTableRow from "./ReviewTableRow";

interface ReviewTableProps {
  reviews: TReview[];
}

export default function ReviewTable({ reviews }: ReviewTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Gear</th>
              <th className="px-4 py-3 text-left">Rating</th>
              <th className="px-4 py-3 text-left">Review</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewTableRow key={review.id} review={review} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}