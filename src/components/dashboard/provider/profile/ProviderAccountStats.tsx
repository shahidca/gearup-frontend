"use client";

import {
  DollarSign,
  Package,
  ShoppingBag,
} from "lucide-react";

import { useProviderDashboard } from "@/hooks/useProviderDashboard";

export default function ProviderAccountStats() {
  const { data } = useProviderDashboard();

  if (!data) return null;

  return (
    <section className="rounded-2xl border bg-card p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Account Statistics
      </h2>

      <div className="space-y-5">

        <StatItem
          icon={<Package className="h-5 w-5" />}
          title="Total Gear"
          value={data.totalGear}
        />

        <StatItem
          icon={<ShoppingBag className="h-5 w-5" />}
          title="Total Orders"
          value={data.totalOrders}
        />

        <StatItem
          icon={<ShoppingBag className="h-5 w-5" />}
          title="Active Orders"
          value={data.activeOrders}
        />

        <StatItem
          icon={<DollarSign className="h-5 w-5" />}
          title="Revenue"
          value={`৳${Number(
            data.totalRevenue
          ).toLocaleString()}`}
        />

      </div>

    </section>
  );
}

interface StatItemProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

function StatItem({
  icon,
  title,
  value,
}: StatItemProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">

      <div className="flex items-center gap-3">

        <div className="rounded-lg bg-primary/10 p-2 text-primary">
          {icon}
        </div>

        <span className="font-medium">
          {title}
        </span>

      </div>

      <span className="text-lg font-bold">
        {value}
      </span>

    </div>
  );
}