"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  createPayment,
  confirmPayment,
} from "@/services/payment.service";

export function useCreatePayment() {
  return useMutation({
    mutationFn: createPayment,

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to create payment."
      );
    },
  });
}

export function useConfirmPayment() {
  return useMutation({
    mutationFn: confirmPayment,

    onSuccess: () => {
      toast.success("Payment completed successfully.");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Payment confirmation failed."
      );
    },
  });
}