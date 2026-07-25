"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getProviderOrderById,
  getProviderOrders,
  updateProviderOrder,
} from "@/services/provider.service";

/* ==========================================
   Get Provider Orders
========================================== */

export function useProviderOrders() {
  return useQuery({
    queryKey: ["provider-orders"],
    queryFn: getProviderOrders,
  });
}

/* ==========================================
   Update Provider Order
========================================== */

export function useUpdateProviderOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: string;
    }) =>
      updateProviderOrder(id, status),

    onSuccess: () => {
      toast.success(
        "Order status updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-orders"],
      });

      queryClient.invalidateQueries({
        queryKey: ["provider-dashboard"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update order."
      );
    },
  });
}

export function useSingleProviderOrder(
  id: string
) {
  return useQuery({
    queryKey: [
      "provider-order",
      id,
    ],

    queryFn: () =>
      getProviderOrderById(id),

    enabled: !!id,
  });
}