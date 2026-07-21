"use client";

import { useMutation } from "@tanstack/react-query";

import {
  createRental,
  CreateRentalPayload,
} from "@/services/rental.service";

export function useCreateRental() {
  return useMutation({
    mutationFn: (payload: CreateRentalPayload) =>
      createRental(payload),
  });
}