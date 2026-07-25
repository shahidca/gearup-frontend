"use client";

import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  size?: number;
}

export default function RatingStars({
  rating,
  size = 18,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}