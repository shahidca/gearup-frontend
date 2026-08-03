"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { updateAdminUserStatus } from "@/services/admin.service";

export function useUpdateUserStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: string;
    }) => updateAdminUserStatus(id, status),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
}