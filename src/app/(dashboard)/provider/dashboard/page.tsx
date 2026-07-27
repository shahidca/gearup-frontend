"use client";

import ProviderDashboardSkeleton from "@/components/dashboard/provider/ProviderDashboardSkeleton";
import ProviderRecentOrders from "@/components/dashboard/provider/ProviderRecentOrders";
import ProviderStats from "@/components/dashboard/provider/ProviderStats";

import { useProviderDashboard } from "@/hooks/useProvider";

export default function ProviderDashboardPage() {
  const {
    data,
    isLoading,
    isError,
  } = useProviderDashboard();

  if (isLoading) {
    return <ProviderDashboardSkeleton />;
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
    <main className="space-y-8">
      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold">
          Provider Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back! Here's an overview of your rental business.
        </p>
      </section>

      {/* Statistics */}

      <ProviderStats stats={data} />

      {/* Recent Orders */}

      <ProviderRecentOrders
        orders={data.recentOrders ?? []}
      />
    </main>
  );
}