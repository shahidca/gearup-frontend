"use client";

import { useQuery } from "@tanstack/react-query";

import { getCustomerRental } from "@/services/customer.service";

export function useCustomerRental(
  rentalId: string
) {
  return useQuery({
    queryKey: [
      "customer-rental",
      rentalId,
    ],

    queryFn: () =>
      getCustomerRental(rentalId),

    enabled: !!rentalId,
  });
}