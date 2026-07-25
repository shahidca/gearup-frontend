"use client";

import { useQuery } from "@tanstack/react-query";

import {
  Category,
  getCategories,
} from "@/services/category.service";

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,

    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};