"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getAllUsers,
  updateUserStatus,
  TUserQuery,
  getSingleUser,
} from "@/services/admin-user.service";

import { toast } from "sonner";

export const useAdminUsers = (
  query: TUserQuery
) => {
  return useQuery({
    queryKey: ["admin-users", query],
    queryFn: () => getAllUsers(query),
  });
};

export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      status,
    }: {
      userId: string;
      status: "ACTIVE" | "SUSPENDED";
    }) =>
      updateUserStatus(userId, status),

    onSuccess: () => {
      toast.success(
        "User status updated successfully"
      );

      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },

    onError: () => {
      toast.error(
        "Failed to update user status"
      );
    },
  });
};

export const useSingleUser = (
  userId: string,
  open: boolean
) => {
  return useQuery({
    queryKey: ["admin-user", userId],

    queryFn: () =>
      getSingleUser(userId),

    enabled: open && !!userId,
  });
};