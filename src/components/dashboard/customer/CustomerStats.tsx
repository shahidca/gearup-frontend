"use client";

import {
  CreditCard,
  Package,
  ShoppingBag,
  CheckCircle,
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
        value={stats.totalRentals}
        icon={
          <ShoppingBag className="size-7" />
        }
      />

      <CustomerStatCard
        title="Active Rentals"
        value={stats.activeRentals}
        icon={
          <Package className="size-7" />
        }
      />

      <CustomerStatCard
        title="Completed"
        value={stats.completedRentals}
        icon={
          <CheckCircle className="size-7" />
        }
      />

      <CustomerStatCard
        title="Total Spent"
        value={`৳${Number(
          stats.totalSpent
        ).toLocaleString()}`}
        icon={
          <CreditCard className="size-7" />
        }
      />

    </section>
  );
}