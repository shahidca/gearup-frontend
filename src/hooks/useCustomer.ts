"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  getCustomerDashboard,
  getCustomerPayments,
  getCustomerProfile,
  getCustomerRentals,
  updateCustomerProfile,
} from "@/services/customer.service";

export function useCustomerDashboard() {
  return useQuery({
    queryKey: ["customer-dashboard"],
    queryFn: getCustomerDashboard,
  });
}

export type TCustomerRentalQuery = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  status?: string;
};

export function useCustomerRentals(
  query?: TCustomerRentalQuery
) {
  return useQuery({
    queryKey: ["customer-rentals", query],
    queryFn: () =>
      getCustomerRentals(query),
  });
}

export function useCustomerPayments() {
  return useQuery({
    queryKey: ["customer-payments"],
    queryFn: getCustomerPayments,
  });
}

export function useCustomerProfile() {
  return useQuery({
    queryKey: ["customer-profile"],
    queryFn: getCustomerProfile,
  });
}

export function useUpdateCustomerProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCustomerProfile,

    onSuccess: () => {
      toast.success("Profile updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["customer-profile"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update profile."
      );
    },
  });
}