"use client";

import { useQuery } from "@tanstack/react-query";

import {
  getGear,
  type GearQuery,
} from "@/services/gear.service";

export function useGear(params?: GearQuery) {
  return useQuery({
    queryKey: ["gear", params],

    queryFn: () => getGear(params),
  });
}