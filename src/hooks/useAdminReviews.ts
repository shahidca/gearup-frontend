"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getAllReviews,
  getSingleReview,
  deleteReview,
  TReviewQuery,
} from "@/services/admin-review.service";

export function useAdminReviews(
  query: TReviewQuery
) {
  return useQuery({
    queryKey: ["admin-reviews", query],
    queryFn: () => getAllReviews(query),
  });
}

export function useSingleAdminReview(
  reviewId: string
) {
  return useQuery({
    queryKey: [
      "admin-review",
      reviewId,
    ],
    queryFn: () =>
      getSingleReview(reviewId),
    enabled: !!reviewId,
  });
}

export function useDeleteReview() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteReview,

    onSuccess: () => {
      toast.success(
        "Review deleted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["admin-reviews"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "admin-dashboard",
        ],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to delete review."
      );
    },
  });
}