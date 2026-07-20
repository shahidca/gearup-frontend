"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data.data;
};

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    retry: false,
  });
}