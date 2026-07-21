"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createRental,
  cancelRental,
  CreateRentalPayload,
} from "@/services/rental.service";

export function useCreateRental() {
  return useMutation({
    mutationFn: (payload: CreateRentalPayload) =>
      createRental(payload),

    onSuccess: () => {
      toast.success("Rental created successfully");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to create rental"
      );
    },
  });
}

export function useCancelRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelRental,

    onSuccess: () => {
      toast.success("Rental cancelled successfully");

      queryClient.invalidateQueries({
        queryKey: ["my-rentals"],
      });

      queryClient.invalidateQueries({
        queryKey: ["rental"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to cancel rental"
      );
    },
  });
}