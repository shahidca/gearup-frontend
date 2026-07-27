"use client";

import AdminDashboardSkeleton from "@/components/dashboard/admin/AdminDashboardSkeleton";
import AdminRecentRentals from "@/components/dashboard/admin/AdminRecentRentals";
import AdminStats from "@/components/dashboard/admin/AdminStats";

import { useAdminDashboard } from "@/hooks/useAdminDashboard";

export default function AdminDashboardPage() {
  const {
    data,
    isLoading,
    isError,
  } = useAdminDashboard();

  const dashboard = data;

  if (isLoading) {
    return <AdminDashboardSkeleton />;
  }

  if (isError || !dashboard) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 text-center shadow-sm">

          <h2 className="text-xl font-semibold text-destructive">
            Failed to load dashboard
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Something went wrong while loading the
            dashboard. Please refresh the page and
            try again.
          </p>

        </div>
      </div>
    );
  }

  return (
    <main className="space-y-8">

      {/* ================= Header ================= */}

      <section>

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Monitor your rental platform with
          real-time statistics and recent activity.
        </p>

      </section>

      {/* ================= Statistics ================= */}

      <AdminStats
        stats={dashboard}
      />

      {/* ================= Recent Rentals ================= */}

      <AdminRecentRentals
        rentals={dashboard.recentRentals}
      />

    </main>
  );
}