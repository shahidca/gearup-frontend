"use client";

import { useQuery } from "@tanstack/react-query";

import { getMyRentals } from "@/services/rental.service";

export function useMyRentals() {
  return useQuery({
    queryKey: ["my-rentals"],
    queryFn: getMyRentals,
  });
}