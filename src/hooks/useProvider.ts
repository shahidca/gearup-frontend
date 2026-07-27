
"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

import {
  getProviderDashboard,
  getProviderGear,
  getSingleProviderGear,
  createProviderGear,
  updateProviderGear,
  deleteProviderGear,
  getProviderOrders,
  getProviderOrderById,
  updateProviderOrder,
  getProviderProfile,
  updateProviderProfile,
  TProviderGearQuery,
} from "@/services/provider.service";

/* ======================================================
   Provider Dashboard
====================================================== */

export function useProviderDashboard() {
  return useQuery({
    queryKey: ["provider-dashboard"],
    queryFn: getProviderDashboard,
  });
}

/* ======================================================
   Provider Gear
====================================================== */

export function useProviderGear(
  query: TProviderGearQuery
) {
  return useQuery({
    queryKey: ["provider-gear", query],
    queryFn: () => getProviderGear(query),
  });
}

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
   Create Provider Gear
====================================================== */

export function useCreateProviderGear() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createProviderGear,

    onSuccess: () => {
      toast.success(
        "Gear added successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "provider-dashboard",
        ],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data
          ?.message ??
          "Failed to create gear."
      );
    },
  });
}

/* ======================================================
   Update Provider Gear
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
      updateProviderGear(id, payload),

    onSuccess: () => {
      toast.success(
        "Gear updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-gear"],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "provider-dashboard",
        ],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data
          ?.message ??
          "Failed to update gear."
      );
    },
  });
}

/* ======================================================
   Delete Provider Gear
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
        queryKey: [
          "provider-dashboard",
        ],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data
          ?.message ??
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

export function useProviderOrder(
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
        queryKey: [
          "provider-dashboard",
        ],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data
          ?.message ??
          "Failed to update order."
      );
    },
  });
}

/* ======================================================
   Provider Profile
====================================================== */

export function useProviderProfile() {
  return useQuery({
    queryKey: ["provider-profile"],
    queryFn: getProviderProfile,
  });
}

/* ======================================================
   Update Provider Profile
====================================================== */

export function useUpdateProviderProfile() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn:
      updateProviderProfile,

    onSuccess: () => {
      toast.success(
        "Profile updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: [
          "provider-profile",
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "provider-dashboard",
        ],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data
          ?.message ??
          "Failed to update profile."
      );
    },
  });
}

