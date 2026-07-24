"use client";

import { useRouter } from "next/navigation";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createRental,
  cancelRental,
  getMyRentals,
  getRentalById,
  CreateRentalPayload,
} from "@/services/rental.service";

/* ================= Create Rental ================= */

export function useCreateRental() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateRentalPayload) =>
      createRental(payload),

    onSuccess: () => {
      toast.success("Rental created successfully");

      queryClient.invalidateQueries({
        queryKey: ["customer-rentals"],
      });

      queryClient.invalidateQueries({
        queryKey: ["customer-dashboard"],
      });

      router.push("/customer/rentals");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to create rental"
      );
    },
  });
}

/* ================= My Rentals ================= */

export function useMyRentals() {
  return useQuery({
    queryKey: ["customer-rentals"],
    queryFn: getMyRentals,
  });
}

/* ================= Single Rental ================= */

export function useSingleRental(id: string) {
  return useQuery({
    queryKey: ["rental", id],
    queryFn: () => getRentalById(id),
    enabled: !!id,
  });
}

/* ================= Cancel Rental ================= */

export function useCancelRental() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelRental,

    onSuccess: () => {
      toast.success("Rental cancelled successfully");

      queryClient.invalidateQueries({
        queryKey: ["customer-rentals"],
      });

      queryClient.invalidateQueries({
        queryKey: ["rental"],
      });

      queryClient.invalidateQueries({
        queryKey: ["customer-dashboard"],
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