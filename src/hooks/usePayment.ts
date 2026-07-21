"use client";

import { useMutation } from "@tanstack/react-query";

import {
  createPayment,
  confirmPayment,
} from "@/services/payment.service";

export function useCreatePayment() {
  return useMutation({
    mutationFn: createPayment,
  });
}

export function useConfirmPayment() {
  return useMutation({
    mutationFn: confirmPayment,
  });
}