"use client";

import AdminDashboardSkeleton from "@/components/dashboard/admin/AdminDashboardSkeleton";
import AdminRecentRentals from "@/components/dashboard/admin/AdminRecentRentals";
import AdminStats from "@/components/dashboard/admin/AdminStats";

import { useAdminDashboard } from "@/hooks/useAdminDashboard";

export default function AdminDashboard() {
  const {
    data,
    isLoading,
    isError,
  } = useAdminDashboard();

  if (isLoading) {
    return <AdminDashboardSkeleton />;
  }

  if (isError || !data) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Failed to load dashboard.
      </div>
    );
  }

  return (
    <main className="space-y-8">

      <section>

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Overview of the GearUp platform.
        </p>

      </section>

      <AdminStats stats={data} />

      <AdminRecentRentals
        rentals={data.recentRentals}
      />

    </main>
  );
}