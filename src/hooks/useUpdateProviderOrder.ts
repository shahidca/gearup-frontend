"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { updateProviderOrder } from "@/services/provider.service";

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
      queryClient.invalidateQueries({
        queryKey: ["provider-orders"],
      });
    },
  });
}