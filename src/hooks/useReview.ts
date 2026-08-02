"use client";

import { getReviews, type TReviewQuery } from "@/services/review.service";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { getHomepageReviews } from "@/services/review.service";
import {
  createReview,
  deleteReview,
  getGearReviews,
  getMyReviews,
  getSingleReview,
  updateReview,
  type TCreateReview,
  type TUpdateReview,
} from "@/services/review.service";

interface ErrorResponse {
  message: string;
}

/* ===========================
   My Reviews
=========================== */

export const useMyReviews = () => {
  return useQuery({
    queryKey: ["my-reviews"],
    queryFn: getMyReviews,
  });
};

/* ===========================
   Single Review
=========================== */

export const useSingleReview = (
  id: string
) => {
  return useQuery({
    queryKey: ["review", id],
    queryFn: () =>
      getSingleReview(id),
    enabled: !!id,
  });
};

export function useReviews(params?: TReviewQuery) {
  return useQuery({
    queryKey: ["reviews", params],
    queryFn: () => getReviews(params),
  });
}

/* ===========================
   Gear Reviews
=========================== */

export const useGearReviews = (
  gearId: string
) => {
  return useQuery({
    queryKey: [
      "gear-reviews",
      gearId,
    ],
    queryFn: () =>
      getGearReviews(gearId),
    enabled: !!gearId,
  });
};

/* ===========================
   Create Review
=========================== */

export const useCreateReview = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (
      payload: TCreateReview
    ) => createReview(payload),

    onSuccess: () => {
      toast.success(
        "Review submitted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["my-reviews"],
      });
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Failed to submit review."
      );
    },
  });
};

/* ===========================
   Update Review
=========================== */

export const useUpdateReview = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: TUpdateReview;
    }) =>
      updateReview(id, payload),

    onSuccess: (
      _,
      variables
    ) => {
      toast.success(
        "Review updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["my-reviews"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "review",
          variables.id,
        ],
      });
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Failed to update review."
      );
    },
  });
};

/* ===========================
   Delete Review
=========================== */

export const useDeleteReview = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (
      id: string
    ) => deleteReview(id),

    onSuccess: () => {
      toast.success(
        "Review deleted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["my-reviews"],
      });
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Failed to delete review."
      );
    },
  });
};

/* ===========================
   Homepage Reviews
=========================== */

export const useHomepageReviews = () => {
  return useQuery({
    queryKey: ["homepage-reviews"],
    queryFn: getHomepageReviews,
  });
};