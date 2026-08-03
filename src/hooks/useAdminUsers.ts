"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";
export { useSingleAdminUser as useSingleUser };
import {
  getAdminUsers,
  getSingleAdminUser,
  updateAdminUserStatus,
  TAdminUserQuery,
} from "@/services/admin.service";

export function useAdminUsers(
  query: TAdminUserQuery
) {
  return useQuery({
    queryKey: ["admin-users", query],
    queryFn: () => getAdminUsers(query),
  });
}

export function useSingleAdminUser(
  id: string
) {
  return useQuery({
    queryKey: ["admin-user", id],
    queryFn: () =>
      getSingleAdminUser(id),
    enabled: !!id,
  });
}

export function useUpdateAdminUserStatus() {
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
      updateAdminUserStatus(
        id,
        status
      ),

    onSuccess: () => {
      toast.success(
        "User status updated successfully."
      );

      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });

      queryClient.invalidateQueries({
        queryKey: ["admin-dashboard"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to update user."
      );
    },
  });
}