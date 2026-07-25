"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getAllRentals,
  getSingleRental,
  updateRentalStatus,
  TRentalQuery,
} from "@/services/admin-rental.service";

export function useAdminRentals(
  query: TRentalQuery
) {
  return useQuery({
    queryKey: ["admin-rentals", query],
    queryFn: () => getAllRentals(query),
  });
}

export function useSingleAdminRental(
  rentalId: string
) {
  return useQuery({
    queryKey: [
      "admin-rental",
      rentalId,
    ],
    queryFn: () =>
      getSingleRental(rentalId),
    enabled: !!rentalId,
  });
}

export function useUpdateRentalStatus() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      rentalId,
      status,
    }: {
      rentalId: string;
      status: string;
    }) =>
      updateRentalStatus(
        rentalId,
        status
      ),

    onSuccess: (
      _,
      variables
    ) => {
      toast.success(
        "Rental status updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["admin-rentals"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "admin-rental",
          variables.rentalId,
        ],
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
          "Failed to update rental."
      );
    },
  });
}