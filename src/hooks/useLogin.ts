"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

import {
  loginUser,
  type LoginPayload,
} from "@/services/auth.service";

export function useLogin() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) =>
      loginUser(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });

      toast.success("Welcome back!");
    },

    onError: (error: any) => {
      toast.error("Login Failed", {
        description:
          error?.response?.data?.message ??
          "Something went wrong.",
      });
    },
  });

  return {
    login: mutation.mutate,
    loginAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
}