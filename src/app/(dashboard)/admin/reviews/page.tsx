"use client";

import { useState } from "react";

import { useAdminReviews } from "@/hooks/useAdminReviews";


import Pagination from "@/components/shared/Pagination";
import ReviewSkeleton from "@/components/dashboard/admin/reviews/ReviewSkeleton";
import ReviewSearch from "@/components/dashboard/admin/reviews/ReviewSearch";
import EmptyReviews from "@/components/dashboard/admin/reviews/EmptyReviews";
import ReviewTable from "@/components/dashboard/admin/reviews/ReviewTable";

export default function AdminReviewsPage() {
  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] =
    useState("");

  const {
    data,
    isLoading,
    isError,
  } = useAdminReviews({
    page,
    limit: 10,
    searchTerm,
  });

  if (isLoading) {
    return <ReviewSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-6">
        Failed to load reviews.
      </div>
    );
  }

  const reviews = data ?? [];

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Review Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          View and manage all customer reviews.
        </p>

      </div>

      <ReviewSearch
        value={searchTerm}
        onChange={setSearchTerm}
      />

      {reviews.length === 0 ? (
        <EmptyReviews />
      ) : (
        <>
          <ReviewTable reviews={reviews} />

          <Pagination
            currentPage={page}
            totalPage={1}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}