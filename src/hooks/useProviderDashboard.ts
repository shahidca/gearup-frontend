"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderDashboard } from "@/services/provider-dashboard.service";

export const useProviderDashboard =
  () => {
    return useQuery({
      queryKey: [
        "provider-dashboard",
      ],
      queryFn:
        getProviderDashboard,
    });
  };