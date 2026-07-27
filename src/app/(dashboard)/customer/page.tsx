"use client";

import { Button } from "@/components/ui/button";

import CustomerDashboardSkeleton from "@/components/dashboard/customer/CustomerDashboardSkeleton";
import CustomerRecentRentals from "@/components/dashboard/customer/CustomerRecentRentals";
import CustomerStats from "@/components/dashboard/customer/CustomerStats";

import { useCustomerDashboard } from "@/hooks/useCustomer";

export default function CustomerDashboardPage() {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useCustomerDashboard();

  if (isLoading) {
    return <CustomerDashboardSkeleton />;
  }

  if (isError || !data) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md rounded-2xl border border-destructive/30 bg-card p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-destructive">
            Failed to load dashboard
          </h2>

          <p className="mt-3 text-sm text-muted-foreground">
            Something went wrong while loading your dashboard.
            Please try again.
          </p>

          <Button
            className="mt-6"
            onClick={() => refetch()}
          >
            Try Again
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      {/* Header */}

      <section>
        <h1 className="text-3xl font-bold">
          Customer Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Overview of your rentals, payments, and recent activity.
        </p>
      </section>

      {/* Statistics */}

      <CustomerStats stats={data} />

      {/* Recent Rentals */}

      <CustomerRecentRentals
        rentals={data.recentRentals ?? []}
      />
    </main>
  );
}