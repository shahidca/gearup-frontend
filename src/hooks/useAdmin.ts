"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import {
  getAdminProfile,
  updateAdminProfile,
} from "@/services/admin.service";

/* ===========================
   Profile
=========================== */

export function useAdminProfile() {
  return useQuery({
    queryKey: ["admin-profile"],
    queryFn: getAdminProfile,
  });
}

export function useUpdateAdminProfile() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn:
      updateAdminProfile,

    onSuccess: () => {
      toast.success(
        "Profile updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: [
          "admin-profile",
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