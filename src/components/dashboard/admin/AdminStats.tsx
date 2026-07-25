"use client";

import {
  Users,
  Package,
  ShoppingBag,
  DollarSign,
  UserCheck,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import AdminStatCard from "./AdminStatCard";

interface AdminStatsProps {
  stats: any;
}

export default function AdminStats({
  stats,
}: AdminStatsProps) {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

      <AdminStatCard
        title="Total Users"
        value={stats.totalUsers}
        icon={<Users className="size-7" />}
      />

      <AdminStatCard
        title="Customers"
        value={stats.customers}
        icon={<UserCheck className="size-7" />}
      />

      <AdminStatCard
        title="Providers"
        value={stats.providers}
        icon={<ShieldCheck className="size-7" />}
      />

      <AdminStatCard
        title="Total Gear"
        value={stats.totalGear}
        icon={<Package className="size-7" />}
      />

      <AdminStatCard
        title="Total Rentals"
        value={stats.totalRentals}
        icon={<ShoppingBag className="size-7" />}
      />

      <AdminStatCard
        title="Active Rentals"
        value={stats.activeRentals}
        icon={<Clock3 className="size-7" />}
      />

      <AdminStatCard
        title="Completed Rentals"
        value={stats.completedRentals}
        icon={<CheckCircle2 className="size-7" />}
      />

      <AdminStatCard
        title="Revenue"
        value={`৳${Number(
          stats.totalRevenue
        ).toLocaleString()}`}
        icon={<DollarSign className="size-7" />}
      />

    </section>
  );
}