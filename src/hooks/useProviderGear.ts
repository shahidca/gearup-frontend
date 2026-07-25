"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
  createProviderGear,
  deleteProviderGear,
  getProviderDashboard,
  getProviderGear,
  getProviderOrders,
  getSingleProviderGear,
  updateProviderGear,
  updateProviderOrder,
  type TProviderGearQuery,
} from "@/services/provider.service";

/* ======================================================
   Dashboard
====================================================== */

export function useProviderDashboard() {
  return useQuery({
    queryKey: ["provider-dashboard"],
    queryFn: getProviderDashboard,
  });
}

/* ======================================================
   Provider Gear List
====================================================== */

export function useProviderGear(
  query: TProviderGearQuery
) {
  return useQuery({
    queryKey: ["provider-gear", query],
    queryFn: () => getProviderGear(query),
  });
}

/* ======================================================
   Single Gear
====================================================== */

export function useSingleProviderGear(
  id: string
) {
  return useQuery({
    queryKey: ["provider-gear", id],
    queryFn: () =>
      getSingleProviderGear(id),
    enabled: !!id,
  });
}

/* ======================================================
   Create Gear
====================================================== */

export function useCreateProviderGear() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createProviderGear,

    onSuccess: () => {
      toast.success(
        "Gear created successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });

      queryClient.invalidateQueries({
        queryKey: ["provider-dashboard"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to create gear."
      );
    },
  });
}

/* ======================================================
   Update Gear
====================================================== */

export function useUpdateProviderGear() {
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
      updateProviderGear(
        id,
        payload
      ),

    onSuccess: () => {
      toast.success(
        "Gear updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });

      queryClient.invalidateQueries({
        queryKey: ["provider-dashboard"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update gear."
      );
    },
  });
}

/* ======================================================
   Delete Gear
====================================================== */

export function useDeleteProviderGear() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteProviderGear,

    onSuccess: () => {
      toast.success(
        "Gear deleted successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });

      queryClient.invalidateQueries({
        queryKey: ["provider-dashboard"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to delete gear."
      );
    },
  });
}

/* ======================================================
   Provider Orders
====================================================== */

export function useProviderOrders() {
  return useQuery({
    queryKey: ["provider-orders"],
    queryFn: getProviderOrders,
  });
}

export function useUpdateProviderOrder() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: string;
    }) =>
      updateProviderOrder(
        id,
        status
      ),

    onSuccess: () => {
      toast.success(
        "Order updated successfully."
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