"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import {
  getProviderProfile,
  updateProviderProfile,
} from "@/services/provider.service";

export function useProviderProfile() {
  return useQuery({
    queryKey: ["provider-profile"],
    queryFn: getProviderProfile,
  });
}

export function useUpdateProviderProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProviderProfile,

    onSuccess: () => {
      toast.success(
        "Profile updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["provider-profile"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update profile."
      );
    },
  });
}