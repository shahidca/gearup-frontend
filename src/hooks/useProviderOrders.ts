"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  getProviderOrders,
  updateProviderOrder,
} from "@/services/provider.service";

export function useProviderOrders() {
  return useQuery({
    queryKey: ["provider-orders"],
    queryFn: getProviderOrders,
  });
}

export function useUpdateProviderOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: string;
    }) => updateProviderOrder(id, status),

    onSuccess: () => {
      toast.success("Order status updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider-orders"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update order status."
      );
    },
  });
}