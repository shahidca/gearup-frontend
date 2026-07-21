"use client";

import { useQuery } from "@tanstack/react-query";
import { getSingleGear } from "@/services/gear.service";

export function useSingleGear(id: string) {
  return useQuery({
    queryKey: ["gear", id],
    queryFn: () => getSingleGear(id),
    enabled: !!id,
  });
}