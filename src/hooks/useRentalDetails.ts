"use client";

import { useQuery } from "@tanstack/react-query";

import { getRentalById } from "@/services/rental.service";

export function useRentalDetails(id: string) {
  return useQuery({
    queryKey: ["rental", id],
    queryFn: () => getRentalById(id),
    enabled: !!id,
  });
}