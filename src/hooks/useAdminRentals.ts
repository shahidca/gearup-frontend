"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getAllRentals,
  getSingleRental,
  updateRentalStatus,
  TRentalQuery,
} from "@/services/admin-rental.service";

import { toast } from "sonner";

export const useAdminRentals = (
  query: TRentalQuery
) => {
  return useQuery({
    queryKey: ["admin-rentals", query],
    queryFn: () => getAllRentals(query),
  });
};

export const useSingleRental = (
  rentalId: string
) => {
  return useQuery({
    queryKey: ["admin-rental", rentalId],
    queryFn: () => getSingleRental(rentalId),
    enabled: !!rentalId,
  });
};

export const useUpdateRentalStatus = () => {
  const queryClient = useQueryClient();

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

    onSuccess: () => {
      toast.success(
        "Rental status updated successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["admin-rentals"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to update rental status"
      );
    },
  });
};