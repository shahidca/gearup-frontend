"use client";

import {
  CheckCircle,
  CreditCard,
  Package,
  ShoppingBag,
} from "lucide-react";

import CustomerStatCard from "./CustomerStatCard";

interface CustomerStatsProps {
  stats: {
    totalRentals: number;
    activeRentals: number;
    completedRentals: number;
    totalSpent: number;
  };
}

export default function CustomerStats({
  stats,
}: CustomerStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <CustomerStatCard
        title="Total Rentals"
        value={stats.totalRentals ?? 0}
        icon={<ShoppingBag className="size-7" />}
      />

      <CustomerStatCard
        title="Active Rentals"
        value={stats.activeRentals ?? 0}
        icon={<Package className="size-7" />}
      />

      <CustomerStatCard
        title="Completed Rentals"
        value={stats.completedRentals ?? 0}
        icon={<CheckCircle className="size-7" />}
      />

      <CustomerStatCard
        title="Total Spent"
        value={`৳${Number(
          stats.totalSpent ?? 0
        ).toLocaleString()}`}
        icon={<CreditCard className="size-7" />}
      />
    </section>
  );
}