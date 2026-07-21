"use client";
import { getDashboardStats } from "@/services/admin.service";
import { useQuery } from "@tanstack/react-query";

import {
  getAllGear,
  getAllRentals,
  getAllUsers,
} from "@/services/admin.service";

export function useAdminUsers() {
  return useQuery({
    queryKey: ["admin-users"],
    queryFn: getAllUsers,
  });
}

export function useAdminGear() {
  return useQuery({
    queryKey: ["admin-gear"],
    queryFn: getAllGear,
  });
}

export function useAdminRentals() {
  return useQuery({
    queryKey: ["admin-rentals"],
    queryFn: getAllRentals,
  });
}

export function useDashboardStats() {
  return useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStats,
  });
}