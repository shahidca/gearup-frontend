"use client";

import {
  CheckCircle2,
  Clock3,
  DollarSign,
  Package,
  ShieldCheck,
  ShoppingBag,
  UserCheck,
  Users,
} from "lucide-react";

import AdminStatCard from "./AdminStatCard";

interface AdminStatsData {
  totalUsers: number;
  customers: number;
  providers: number;
  totalGear: number;
  totalRentals: number;
  activeRentals: number;
  completedRentals: number;
  totalRevenue: number;
}

interface AdminStatsProps {
  stats: AdminStatsData;
}

export default function AdminStats({
  stats,
}: AdminStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

      <AdminStatCard
        title="Total Users"
        value={stats.totalUsers ?? 0}
        icon={<Users className="size-7" />}
      />

      <AdminStatCard
        title="Customers"
        value={stats.customers ?? 0}
        icon={<UserCheck className="size-7" />}
      />

      <AdminStatCard
        title="Providers"
        value={stats.providers ?? 0}
        icon={<ShieldCheck className="size-7" />}
      />

      <AdminStatCard
        title="Total Gear"
        value={stats.totalGear ?? 0}
        icon={<Package className="size-7" />}
      />

      <AdminStatCard
        title="Total Rentals"
        value={stats.totalRentals ?? 0}
        icon={<ShoppingBag className="size-7" />}
      />

      <AdminStatCard
        title="Active Rentals"
        value={stats.activeRentals ?? 0}
        icon={<Clock3 className="size-7" />}
      />

      <AdminStatCard
        title="Completed Rentals"
        value={stats.completedRentals ?? 0}
        icon={<CheckCircle2 className="size-7" />}
      />

      <AdminStatCard
        title="Revenue"
        value={`৳${Number(
          stats.totalRevenue ?? 0
        ).toLocaleString()}`}
        icon={<DollarSign className="size-7" />}
      />

    </section>
  );
}