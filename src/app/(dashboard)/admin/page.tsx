"use client";

import {
  DollarSign,
  Package,
  ShoppingBag,
  Users,
} from "lucide-react";
import RecentRentals from "@/components/dashboard/admin/RecentRentals";
import RentalStatusChart from "@/components/dashboard/admin/RentalStatusChart";
import UserRoleChart from "@/components/dashboard/admin/UserRoleChart";
import { useDashboardStats } from "@/hooks/useAdmin";

export default function AdminDashboard() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-center space-y-2">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 px-8 py-6">
          <h2 className="text-lg font-semibold text-destructive">
            Failed to load dashboard
          </h2>

          <p className="mt-2 text-muted-foreground">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <section>

        <h1 className="text-3xl font-bold tracking-tight">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back! Here's an overview of the GearUp platform.
        </p>

      </section>

      {/* Statistics */}

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <DashboardCard
          title="Total Users"
          value={data.totalUsers}
          icon={
            <Users className="size-7 text-primary" />
          }
        />

        <DashboardCard
          title="Total Gear"
          value={data.totalGear}
          icon={
            <Package className="size-7 text-primary" />
          }
        />

        <DashboardCard
          title="Total Rentals"
          value={data.totalRentals}
          icon={
            <ShoppingBag className="size-7 text-primary" />
          }
        />

        <DashboardCard
          title="Revenue"
          value={`৳${Number(
            data.totalRevenue
          ).toLocaleString()}`}
          icon={
            <DollarSign className="size-7 text-primary" />
          }
        />

      </section>

      {/* Charts */}

      <section className="grid gap-6 xl:grid-cols-2">

        <RentalStatusChart stats={data} />

        <UserRoleChart
          customers={data.customers}
          providers={data.providers}
        />

      </section>

      {/* Overview */}

      <section className="rounded-2xl border bg-card p-6 shadow-sm">

        <h2 className="text-xl font-semibold">
          System Overview
        </h2>

        <p className="mt-1 mb-6 text-sm text-muted-foreground">
          Quick statistics about rentals and users.
        </p>

        <div className="grid gap-5 md:grid-cols-2">

          <StatRow
            label="Active Rentals"
            value={data.activeRentals}
          />

          <StatRow
            label="Completed Rentals"
            value={data.completedRentals}
          />

          <StatRow
            label="Customers"
            value={data.customers}
          />

          <StatRow
            label="Providers"
            value={data.providers}
          />

        </div>

      </section>

      <RecentRentals
  rentals={data.recentRentals}/>

    </div>
  );
}

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold">
            {value}
          </h3>

        </div>

        <div className="rounded-xl bg-primary/10 p-3">
          {icon}
        </div>

      </div>

    </div>
  );
}

interface StatRowProps {
  label: string;
  value: number;
}

function StatRow({
  label,
  value,
}: StatRowProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">

      <span className="text-muted-foreground">
        {label}
      </span>

      <span className="text-xl font-bold">
        {value}
      </span>

    </div>
  );
}