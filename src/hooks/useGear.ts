"use client";

import { useQuery } from "@tanstack/react-query";

import {
  getGear,
  type TGearQuery,
} from "@/services/gear.service";

export function useGear(params?: TGearQuery) {
  return useQuery({
    queryKey: ["gear", params],

    queryFn: () => getGear(params),
  });
}