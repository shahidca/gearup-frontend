"use client";

import {
  DollarSign,
  Package,
  ShoppingBag,
  Clock3,
} from "lucide-react";

import ProviderStatCard from "./ProviderStatCard";

interface ProviderStatsProps {
  stats: {
    totalGear: number;
    totalOrders: number;
    activeOrders: number;
    totalRevenue: number;
  };
}

export default function ProviderStats({
  stats,
}: ProviderStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">

      <ProviderStatCard
        title="Total Gear"
        value={stats.totalGear}
        icon={<Package className="size-7" />}
      />

      <ProviderStatCard
        title="Total Orders"
        value={stats.totalOrders}
        icon={<ShoppingBag className="size-7" />}
      />

      <ProviderStatCard
        title="Active Orders"
        value={stats.activeOrders}
        icon={<Clock3 className="size-7" />}
      />

      <ProviderStatCard
        title="Revenue"
        value={`৳${Number(
          stats.totalRevenue
        ).toLocaleString()}`}
        icon={<DollarSign className="size-7" />}
      />

    </section>
  );
}