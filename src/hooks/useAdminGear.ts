"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getAdminGear,
  getSingleAdminGear,
  updateAdminGear,
  deleteAdminGear,
  TAdminGearQuery,
} from "@/services/admin.service";

export function useAdminGear(
  query?: TAdminGearQuery
) {
  return useQuery({
    queryKey: ["admin-gear", query],
    queryFn: () => getAdminGear(query),
  });
}

export function useSingleAdminGear(
  id: string
) {
  return useQuery({
    queryKey: ["admin-gear", id],
    queryFn: () =>
      getSingleAdminGear(id),
    enabled: !!id,
  });
}

export function useUpdateAdminGear() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: Record<
        string,
        unknown
      >;
    }) =>
      updateAdminGear(
        id,
        payload
      ),

    onSuccess: () => {
      toast.success(
        "Gear updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["admin-gear"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "admin-dashboard",
        ],
      });
    },

    onError: (
      error: any
    ) => {
      toast.error(
        error?.response?.data
          ?.message ??
          "Failed to update gear."
      );
    },
  });
}

export function useDeleteAdminGear() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteAdminGear,

    onSuccess: () => {
      toast.success(
        "Gear deleted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["admin-gear"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "admin-dashboard",
        ],
      });
    },

    onError: (
      error: any
    ) => {
      toast.error(
        error?.response?.data
          ?.message ??
          "Failed to delete gear."
      );
    },
  });
}

// Alias exports to resolve missing member errors in dialog components
export { useDeleteAdminGear as useDeleteGear };
export { useUpdateAdminGear as useUpdateGear };