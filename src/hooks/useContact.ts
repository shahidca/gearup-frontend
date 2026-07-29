"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import {
  sendContactMessage,
  type TContactPayload,
} from "@/services/contact.service";

interface ErrorResponse {
  message: string;
}

export function useContact() {
  return useMutation({
    mutationFn: (payload: TContactPayload) =>
      sendContactMessage(payload),

    onSuccess: () => {
      toast.success("Message sent successfully.");
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Failed to send message."
      );
    },
  });
}