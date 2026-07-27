"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getCustomerDashboard,
  getCustomerPayments,
  getCustomerProfile,
  getCustomerRental,
  getCustomerRentals,
  getRentalInvoice,
  updateCustomerProfile,
} from "@/services/customer.service";

/* ======================================================
   Dashboard
====================================================== */

export function useCustomerDashboard() {
  return useQuery({
    queryKey: ["customer-dashboard"],
    queryFn: getCustomerDashboard,
    staleTime: 1000 * 60 * 5,
  });
}

/* ======================================================
   Rentals
====================================================== */

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
    queryFn: () => getCustomerRentals(query),
    staleTime: 1000 * 60,
  });
}

export function useCustomerRental(
  rentalId: string
) {
  return useQuery({
    queryKey: ["customer-rental", rentalId],
    queryFn: () =>
      getCustomerRental(rentalId),
    enabled: !!rentalId,
  });
}

/* ======================================================
   Rental Invoice
====================================================== */

export function useRentalInvoice(
  rentalId: string
) {
  return useQuery({
    queryKey: [
      "rental-invoice",
      rentalId,
    ],
    queryFn: () =>
      getRentalInvoice(rentalId),
    enabled: !!rentalId,
  });
}

/* ======================================================
   Payments
====================================================== */

export function useCustomerPayments() {
  return useQuery({
    queryKey: ["customer-payments"],
    queryFn: getCustomerPayments,
    staleTime: 1000 * 60,
  });
}

/* ======================================================
   Profile
====================================================== */

export function useCustomerProfile() {
  return useQuery({
    queryKey: ["customer-profile"],
    queryFn: getCustomerProfile,
    staleTime: 1000 * 60 * 5,
  });
}

export function useUpdateCustomerProfile() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn:
      updateCustomerProfile,

    onSuccess: () => {
      toast.success(
        "Profile updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: [
          "customer-profile",
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "customer-dashboard",
        ],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data
          ?.message ??
          "Failed to update profile."
      );
    },
  });
}