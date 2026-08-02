"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getGear,
  getSingleGear,
  type TGearQuery,
} from "@/services/gear.service";

export function useGear(params?: TGearQuery) {
  return useQuery({
    queryKey: ["gear", params],
    queryFn: () => getGear(params),
  });
}

export function useSingleGear(id: string) {
  return useQuery({
    queryKey: ["single-gear", id],
    queryFn: () => getSingleGear(id),
    enabled: !!id,
  });
}