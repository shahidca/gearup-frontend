"use client";

import Image from "next/image";
import { Star, Quote, Loader2 } from "lucide-react";
import { useReviews } from "@/hooks/useReview";

export default function HomepageReviews() {
  const { data: reviewsResponse, isLoading, isError } = useReviews({ limit: 6 });

  const reviews = reviewsResponse?.data ?? [];

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError || !reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-muted/30 border-y">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">
            Community Feedback
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Loved by Photographers & Filmmakers
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            See what verified renters have to say about their experience renting high-quality gear.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review: any) => (
            <div
              key={review.id || review._id}
              className="relative flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-muted-foreground/10" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-sm text-foreground/80 line-clamp-4 leading-relaxed">
                  &ldquo;{review.comment || "Great experience renting this gear. Smooth process and excellent condition!"}&rdquo;
                </p>
              </div>

              {/* Author & Gear Info */}
              <div className="mt-6 flex items-center gap-3 pt-4 border-t">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-muted">
                  <Image
                    src={
                      review.user?.image ||
                      "https://placehold.co/100x100"
                    }
                    alt={review.user?.name || "Renter"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold truncate">
                    {review.user?.name || "Verified Renter"}
                  </p>
                  {review.gearItem?.name && (
                    <p className="text-xs text-muted-foreground truncate">
                      Rented: {review.gearItem.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}