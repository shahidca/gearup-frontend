"use client";

import { useQuery } from "@tanstack/react-query";

import { getProviderOrders } from "@/services/provider.service";

export function useProviderOrders() {
  return useQuery({
    queryKey: ["provider-orders"],
    queryFn: getProviderOrders,
  });
}