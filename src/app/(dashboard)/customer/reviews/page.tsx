"use client";

import { useMemo, useState } from "react";

import { useMyReviews } from "@/hooks/useReview";

import ReviewCard from "@/components/review/ReviewCard";
import ReviewFilters from "@/components/review/ReviewFilters";
import ReviewSkeleton from "@/components/review/ReviewSkeleton";

import { TReview } from "@/types/review";

export default function CustomerReviewsPage() {
  const [search, setSearch] = useState("");

  const {
    data: reviews = [],
    isLoading,
    isError,
  } = useMyReviews();

  const filteredReviews = useMemo(() => {
    if (!search.trim()) return reviews;

    return reviews.filter((review: TReview) =>
      review.gearItem?.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [reviews, search]);

  if (isLoading) {
    return (
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            My Reviews
          </h1>

          <p className="text-muted-foreground">
            Loading your reviews...
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map(
            (_, index) => (
              <ReviewSkeleton
                key={index}
              />
            )
          )}
        </div>

      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center">
        Failed to load reviews.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          My Reviews
        </h1>

        <p className="text-muted-foreground">
          Manage all of your equipment
          reviews.
        </p>

      </div>

      {/* Filters */}

      <ReviewFilters
        search={search}
        onSearchChange={setSearch}
      />

      {/* Empty */}

      {!filteredReviews.length && (
        <div className="rounded-xl border py-20 text-center">

          <h3 className="text-xl font-semibold">
            No Reviews Found
          </h3>

          <p className="mt-2 text-muted-foreground">
            You haven't reviewed any gear
            yet.
          </p>

        </div>
      )}

      {/* Grid */}

      {!!filteredReviews.length && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredReviews.map(
            (review: TReview) => (
              <ReviewCard
                key={review.id}
                review={review}
              />
            )
          )}

        </div>
      )}

    </div>
  );
}