"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import type { THomepageReview } from "@/services/review.service";

type TestimonialCardProps = {
  review: THomepageReview;
};

export default function TestimonialCard({
  review,
}: TestimonialCardProps) {
  const totalStars = 5;

  const rating = Math.min(
    Math.max(0, review.rating),
    totalStars
  );

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group flex h-full flex-col justify-between rounded-3xl border border-border/60 bg-card p-8 shadow-md transition-all hover:border-primary/30 hover:shadow-xl"
    >
      <div>
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Quote className="h-5 w-5 fill-current" />
        </div>

        <blockquote className="italic leading-7 text-muted-foreground">
          "{review.comment}"
        </blockquote>
      </div>

      <div>
        <div className="my-6 flex gap-1">
          {Array.from({
            length: totalStars,
          }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted"
                }`}
            />
          ))}
        </div>

        <div className="border-t pt-5">
          <p className="mb-2 text-xs font-medium text-primary">
            {review.gearItem.name}
          </p>

          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={
                  review.customer.profileImage
                    ? review.customer.profileImage
                    : "/images/avatar.png"
                }
                alt={review.customer.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="font-bold">
                {review.customer.name}
              </h4>

              <p className="text-xs text-muted-foreground">
                {new Date(
                  review.createdAt
                ).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}