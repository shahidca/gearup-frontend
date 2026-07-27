"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  createWishlist,
  deleteWishlist,
  getMyWishlist,
  type TCreateWishlist,
} from "@/services/wishlist.service";

/* ===============================
   My Wishlist
================================ */

export const useMyWishlist = () => {
  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getMyWishlist,
  });
};

/* ===============================
   Add Wishlist
================================ */

export const useCreateWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: TCreateWishlist
    ) => createWishlist(payload),

    onSuccess: () => {
      toast.success(
        "Added to wishlist successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to add wishlist"
      );
    },
  });
};

/* ===============================
   Delete Wishlist
================================ */

export const useDeleteWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (gearId: string) =>
      deleteWishlist(gearId),

    onSuccess: () => {
      toast.success(
        "Removed from wishlist"
      );

      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to remove wishlist"
      );
    },
  });
};