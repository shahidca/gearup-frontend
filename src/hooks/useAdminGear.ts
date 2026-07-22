"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  deleteGear,
  getAllGear,
  getSingleGear,
  TGearQuery,
  updateGear,
} from "@/services/admin-gear.service";

import { toast } from "sonner";

export const useAdminGear = (
  query: TGearQuery
) => {
  return useQuery({
    queryKey: ["admin-gear", query],
    queryFn: () => getAllGear(query),
  });
};

export const useSingleGear = (
  gearId: string
) => {
  return useQuery({
    queryKey: ["admin-gear", gearId],
    queryFn: () => getSingleGear(gearId),
    enabled: !!gearId,
  });
};

export const useUpdateGear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      gearId,
      payload,
    }: {
      gearId: string;
      payload: Record<string, unknown>;
    }) => updateGear(gearId, payload),

    onSuccess: () => {
      toast.success("Gear updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["admin-gear"],
      });
    },

    onError: () => {
      toast.error("Failed to update gear");
    },
  });
};

export const useDeleteGear = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (gearId: string) =>
      deleteGear(gearId),

    onSuccess: () => {
      toast.success("Gear deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["admin-gear"],
      });
    },

    onError: () => {
      toast.error("Failed to delete gear");
    },
  });
};