"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

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

/* ===========================
   Dashboard
=========================== */

export const useProviderDashboard =
  () => {
    return useQuery({
      queryKey: [
        "provider-dashboard",
      ],
      queryFn:
        getProviderDashboard,
    });
  };

/* ===========================
   Gear
=========================== */

export const useProviderGear = (
  query: TProviderGearQuery
) => {
  return useQuery({
    queryKey: [
      "provider-gear",
      query,
    ],
    queryFn: () =>
      getProviderGear(query),
  });
};

export const useProviderGearById = (
  id: string
) => {
  return useQuery({
    queryKey: [
      "provider-gear",
      id,
    ],
    queryFn: () =>
      getSingleProviderGear(id),
    enabled: !!id,
  });
};

export const useCreateProviderGear =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        createProviderGear,

      onSuccess: () => {
        toast.success(
          "Gear created successfully"
        );

        queryClient.invalidateQueries(
          {
            queryKey: [
              "provider-gear",
            ],
          }
        );
      },
    });
  };

export const useUpdateProviderGear =
  () => {
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
          "Gear updated successfully"
        );

        queryClient.invalidateQueries(
          {
            queryKey: [
              "provider-gear",
            ],
          }
        );
      },
    });
  };

export const useDeleteProviderGear =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        deleteProviderGear,

      onSuccess: () => {
        toast.success(
          "Gear deleted successfully"
        );

        queryClient.invalidateQueries(
          {
            queryKey: [
              "provider-gear",
            ],
          }
        );
      },
    });
  };

/* ===========================
   Orders
=========================== */

export const useProviderOrders =
  () => {
    return useQuery({
      queryKey: [
        "provider-orders",
      ],
      queryFn:
        getProviderOrders,
    });
  };

export const useUpdateProviderOrder =
  () => {
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
          "Order updated successfully"
        );

        queryClient.invalidateQueries(
          {
            queryKey: [
              "provider-orders",
            ],
          }
        );
      },
    });
  };