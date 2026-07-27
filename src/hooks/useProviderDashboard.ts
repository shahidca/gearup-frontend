"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderDashboard } from "@/services/provider-dashboard.service";

/* ======================================================
   Provider Dashboard
====================================================== */

export function useProviderDashboard() {
  return useQuery({
    queryKey: ["provider-dashboard"],
    queryFn: getProviderDashboard,
  });
}