"use client";

import { useQuery } from "@tanstack/react-query";

import { getDashboardStats } from "@/services/admin-dashboard.service";

export const useAdminDashboard =
  () => {
    return useQuery({
      queryKey: [
        "admin-dashboard",
      ],
      queryFn:
        getDashboardStats,
    });
  };