"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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

/* =========================================
   Current User
========================================= */

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    retry: false,
  });
}

/* =========================================
   Login
========================================= */

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginPayload) =>
      loginUser(payload),

    onSuccess: () => {
      toast.success("Login successful.");

      queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });

      router.refresh();
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
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
    mutationFn: (payload: RegisterPayload) =>
      registerUser(payload),

    onSuccess: () => {
      toast.success(
        "Registration successful."
      );

      router.push("/login");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
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
    mutationFn: (email: string) =>
      forgotPassword(email),

    onSuccess: () => {
      toast.success(
        "Password reset email sent."
      );
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Failed to send email."
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
      resetPassword(token, password),

    onSuccess: () => {
      toast.success(
        "Password reset successfully."
      );

      router.push("/login");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.clear();

      toast.success("Logged out.");

      router.push("/login");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Logout failed."
      );
    },
  });
}