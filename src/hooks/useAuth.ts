"use client";

import { useRouter } from "next/navigation";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import type { ICurrentUser } from "@/types/user";
import {
  loginUser,
  registerUser,
  forgotPassword,
  resetPassword,
  logoutUser,
  getCurrentUser,
  LoginPayload,
  RegisterPayload,
} from "@/services/auth.service";

import { getDashboardRoute } from "@/utils/dashboard-redirect";

interface ErrorResponse {
  message: string;
}

/* =========================================
   Current User
========================================= */

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
}

/* =========================================
   Login
========================================= */

export function useLogin() {
  const router = useRouter();

  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (
      payload: LoginPayload
    ) => loginUser(payload),

    onSuccess: async () => {
      toast.success(
        "Login successful."
      );

      // Refresh current user cache
      await queryClient.invalidateQueries({
        queryKey: [
          "current-user",
        ],
      });

      // Fetch latest authenticated user
      const user =
        await queryClient.fetchQuery({
          queryKey: [
            "current-user",
          ],
          queryFn:
            getCurrentUser,
        });

      // Redirect based on role
      router.replace(
        getDashboardRoute(
          user.role
        )
      );

      router.refresh();
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Login failed."
      );
    },
  });
}

/* =========================================
   Register
========================================= */

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: (
      payload: RegisterPayload
    ) => registerUser(payload),

    onSuccess: () => {
      toast.success(
        "Account created successfully. Please log in."
      );

      router.replace("/login");
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Registration failed."
      );
    },
  });
}

/* =========================================
   Forgot Password
========================================= */

export function useForgotPassword() {
  return useMutation({
    mutationFn: (
      email: string
    ) => forgotPassword(email),

    onSuccess: () => {
      toast.success(
        "Password reset email sent."
      );
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Failed to send reset email."
      );
    },
  });
}

/* =========================================
   Reset Password
========================================= */

export function useResetPassword() {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      token,
      password,
    }: {
      token: string;
      password: string;
    }) =>
      resetPassword(
        token,
        password
      ),

    onSuccess: () => {
      toast.success(
        "Password reset successfully."
      );

      router.replace("/login");
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Password reset failed."
      );
    },
  });
}

/* =========================================
   Logout
========================================= */

export function useLogout() {
  const router = useRouter();

  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.clear();

      toast.success(
        "Logged out successfully."
      );

      router.replace("/login");

      router.refresh();
    },

    onError: (
      error: AxiosError<ErrorResponse>
    ) => {
      toast.error(
        error.response?.data?.message ??
          "Logout failed."
      );
    },
  });
}